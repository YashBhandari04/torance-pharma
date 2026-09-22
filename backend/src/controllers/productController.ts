import { Request, Response } from 'express';
import { ProductModel } from '../models/Product.js';
import { CategoryModel } from '../models/Category.js';

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
    const product = await ProductModel.findById(req.params.id).populate('category', 'name slug icon');
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
    const newProduct = await ProductModel.create(req.body);
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
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
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
