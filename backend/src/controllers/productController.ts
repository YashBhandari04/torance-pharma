import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { ProductModel } from '../models/Product.js';
import { CategoryModel } from '../models/Category.js';

function slugify(str: string): string {
  return str.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const { category, search, dosageForm, featured, includeArchived } = req.query;

    const queryFilter: any = {};

    if (includeArchived !== 'true') {
      queryFilter.isArchived = { $ne: true };
    }

    if (featured === 'true') {
      queryFilter.isFeatured = true;
    }

    if (dosageForm && dosageForm !== 'all') {
      queryFilter.dosageForm = new RegExp(`^${dosageForm}$`, 'i');
    }

    if (category && category !== 'all') {
      const foundCategory = await CategoryModel.findOne({ slug: category as string });
      if (foundCategory) {
        queryFilter.category = foundCategory._id;
      }
    }

    if (search) {
      const searchRegex = new RegExp(search as string, 'i');
      queryFilter.$or = [
        { brandName: searchRegex },
        { genericName: searchRegex },
        { composition: searchRegex },
        { strength: searchRegex },
      ];
    }

    const products = await ProductModel.find(queryFilter)
      .populate('category', 'name slug icon')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const identifier = req.params.id as string;
    let product = null;

    if (mongoose.Types.ObjectId.isValid(identifier)) {
      product = await ProductModel.findById(identifier).populate('category', 'name slug icon');
    }

    if (!product) {
      product = await ProductModel.findOne({ slug: identifier }).populate('category', 'name slug icon');
    }

    if (!product) {
      res.status(404).json({ success: false, message: 'Product not found.' });
      return;
    }

    res.json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const payload = { ...req.body };
    if (!payload.slug && payload.brandName) {
      let baseSlug = slugify(payload.brandName);
      const existing = await ProductModel.findOne({ slug: baseSlug });
      if (existing) {
        baseSlug = slugify(`${payload.brandName}-${payload.strength || payload.dosageForm}`);
      }
      payload.slug = baseSlug;
    }

    const newProduct = await ProductModel.create(payload);
    const populated = await newProduct.populate('category', 'name slug icon');
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: populated,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: (error as Error).message });
  }
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const payload = { ...req.body };
    if (!payload.slug && payload.brandName) {
      payload.slug = slugify(payload.brandName);
    }

    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      payload,
      { new: true, runValidators: true }
    ).populate('category', 'name slug icon');

    if (!updatedProduct) {
      res.status(404).json({ success: false, message: 'Product not found.' });
      return;
    }

    res.json({
      success: true,
      message: 'Product updated successfully',
      data: updatedProduct,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: (error as Error).message });
  }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404).json({ success: false, message: 'Product not found.' });
      return;
    }

    res.json({
      success: true,
      message: 'Product removed from database successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};
