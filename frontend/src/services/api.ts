import axios from 'axios';
import { PRODUCTS, CATEGORIES, CAREERS_LIST } from '../data/mockData';
import { Product, Category, Enquiry, Career } from '../types';

// Dynamically resolve API URL so requests from mobile phones on local Wi-Fi hit backend IP
const getDynamicApiUrl = (): string => {
  if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL;
  const hostname = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : 'localhost';
  return `http://${hostname}:5000/api`;
};

export const api = axios.create({
  baseURL: getDynamicApiUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  if (!config.baseURL || config.baseURL.includes('localhost')) {
    const hostname = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : 'localhost';
    config.baseURL = import.meta.env.VITE_API_URL || `http://${hostname}:5000/api`;
  }
  const token = localStorage.getItem('torance_admin_token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API Helper Services with Mock Fallback for Zero-Downtime UI Testing
export const ProductService = {
  async getAllProducts(params?: { category?: string; search?: string; dosageForm?: string }): Promise<Product[]> {
    try {
      const response = await api.get('/products', { params });
      return response.data.data;
    } catch {
      // Fallback to local baseline mock data if backend server is offline during Phase 2/3
      let result = [...PRODUCTS];
      if (params?.category && params.category !== 'all') {
        result = result.filter(p => {
          const catSlug = typeof p.category === 'object' ? p.category.slug : p.category;
          return catSlug === params.category;
        });
      }
      if (params?.dosageForm && params.dosageForm !== 'all') {
        result = result.filter(p => p.dosageForm.toLowerCase() === params.dosageForm?.toLowerCase());
      }
      if (params?.search) {
        const query = params.search.toLowerCase();
        result = result.filter(p => 
          p.brandName.toLowerCase().includes(query) ||
          p.genericName.toLowerCase().includes(query) ||
          p.composition.toLowerCase().includes(query)
        );
      }
      return result;
    }
  },

  async getProductById(identifier: string): Promise<Product | null> {
    try {
      const response = await api.get(`/products/${identifier}`);
      return response.data.data;
    } catch {
      return PRODUCTS.find(p => p._id === identifier || p.slug === identifier) || null;
    }
  },

  async createProduct(productData: Partial<Product>): Promise<Product> {
    const response = await api.post('/products', productData);
    return response.data.data;
  },

  async updateProduct(id: string, productData: Partial<Product>): Promise<Product> {
    const response = await api.put(`/products/${id}`, productData);
    return response.data.data;
  },

  async deleteProduct(id: string): Promise<void> {
    await api.delete(`/products/${id}`);
  }
};

export const CategoryService = {
  async getCategories(): Promise<Category[]> {
    try {
      const response = await api.get('/categories');
      return response.data.data;
    } catch {
      return CATEGORIES;
    }
  }
};

export const EnquiryService = {
  async submitEnquiry(enquiryData: Omit<Enquiry, '_id' | 'status' | 'createdAt'>): Promise<{ success: boolean; message: string }> {
    try {
      const response = await api.post('/enquiries', enquiryData);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        return {
          success: false,
          message: error.response.data.message
        };
      }
      return {
        success: false,
        message: 'Unable to submit your enquiry right now. Please try again later.'
      };
    }
  }
};

export const CareerService = {
  async getCareers(): Promise<Career[]> {
    try {
      const response = await api.get('/careers');
      return response.data.data;
    } catch {
      return CAREERS_LIST;
    }
  }
};

export const ContactService = {
  async sendContactMessage(contactData: {
    name: string;
    email: string;
    subject: string;
    message: string;
    phone?: string;
    website?: string;
    fax?: string;
  }): Promise<{ success: boolean; message: string }> {
    try {
      const response = await api.post('/contact', contactData);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        return {
          success: false,
          message: error.response.data.message
        };
      }
      return {
        success: false,
        message: 'Unable to send your message. Please try again later.'
      };
    }
  }
};
