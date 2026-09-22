import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  brandName: string;
  genericName: string;
  composition: string;
  strength: string;
  dosageForm: string;
  category: mongoose.Types.ObjectId;
  packaging: string;
  imageUrl: string;
  description: string;
  isFeatured: boolean;
  isArchived: boolean;
  indications: string[];
  storage?: string;
  shelfLife?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema = new Schema(
  {
    brandName: { type: String, required: true, trim: true, index: true },
    genericName: { type: String, required: true, trim: true, index: true },
    composition: { type: String, required: true },
    strength: { type: String, required: true },
    dosageForm: { 
      type: String, 
      required: true, 
      enum: ['Tablet', 'Capsule', 'Injectable', 'Syrup', 'Suspension', 'Ointment', 'Dry Syrup', 'Infusion', 'Nutraceutical'] 
    },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    packaging: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    isArchived: { type: Boolean, default: false },
    indications: [{ type: String }],
    storage: { type: String, default: 'Store below 25°C in a dry place.' },
    shelfLife: { type: String, default: '24 Months' },
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model<IProduct>('Product', ProductSchema);
