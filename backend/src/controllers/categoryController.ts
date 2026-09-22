import { Request, Response } from 'express';
import { CategoryModel } from '../models/Category.js';
import { ProductModel } from '../models/Product.js';

export const getCategories = async (req: Request, res: Response): Promise<void> => {
  try {
    const categories = await CategoryModel.find().sort({ name: 1 });
    
    // Attach dynamic product counts
    const categoriesWithCounts = await Promise.all(
      categories.map(async (cat) => {
        const count = await ProductModel.countDocuments({ category: cat._id, isArchived: { $ne: true } });
        return {
          ...cat.toObject(),
          productCount: count,
        };
      })
    );

    res.json({
      success: true,
      data: categoriesWithCounts,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const createCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, icon } = req.body;
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const newCat = await CategoryModel.create({
      name,
      slug,
      description,
      icon: icon || 'Activity',
    });

    res.status(201).json({
      success: true,
      message: 'Therapeutic category created',
      data: newCat,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: (error as Error).message });
  }
};
