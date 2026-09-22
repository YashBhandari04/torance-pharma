import mongoose, { Schema, Document } from 'mongoose';

export interface IEnquiry extends Document {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  enquiryType: 'Distributor' | 'Hospital' | 'Business Partner' | 'General';
  city: string;
  state?: string;
  country: string;
  message: string;
  status: 'NEW' | 'IN_PROGRESS' | 'CONTACTED' | 'CLOSED';
  createdAt: Date;
}

const EnquirySchema: Schema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    companyName: { type: String, trim: true },
    enquiryType: { 
      type: String, 
      required: true, 
      enum: ['Distributor', 'Hospital', 'Business Partner', 'General'] 
    },
    city: { type: String, required: true, trim: true },
    state: { type: String, trim: true },
    country: { type: String, default: 'India' },
    message: { type: String, required: true },
    status: { 
      type: String, 
      enum: ['NEW', 'IN_PROGRESS', 'CONTACTED', 'CLOSED'], 
      default: 'NEW' 
    },
  },
  { timestamps: true }
);

export const EnquiryModel = mongoose.model<IEnquiry>('Enquiry', EnquirySchema);
