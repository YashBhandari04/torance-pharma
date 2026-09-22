export type DosageForm = 
  | 'Tablet' 
  | 'Capsule' 
  | 'Injectable' 
  | 'Syrup' 
  | 'Suspension' 
  | 'Ointment' 
  | 'Dry Syrup' 
  | 'Infusion' 
  | 'Nutraceutical';

export type EnquiryType = 'Distributor' | 'Hospital' | 'Business Partner' | 'General';

export type EnquiryStatus = 'NEW' | 'IN_PROGRESS' | 'CONTACTED' | 'CLOSED';

export interface Category {
  _id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  productCount?: number;
}

export interface Product {
  _id: string;
  brandName: string;
  genericName: string;
  composition: string;
  strength: string;
  dosageForm: DosageForm;
  category: Category | string;
  packaging: string;
  imageUrl: string;
  description: string;
  isFeatured: boolean;
  isArchived: boolean;
  indications?: string[];
  storage?: string;
  shelfLife?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Enquiry {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  enquiryType: EnquiryType;
  city: string;
  state?: string;
  country: string;
  message: string;
  status: EnquiryStatus;
  createdAt: string;
}

export interface Career {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-Time' | 'Part-Time' | 'Contract';
  description: string;
  requirements: string[];
  isActive: boolean;
  createdAt: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'SUPER_ADMIN';
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
