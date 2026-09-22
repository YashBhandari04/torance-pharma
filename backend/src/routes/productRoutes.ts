import { Router } from 'express';
import { 
  getProducts, getProductById, createProduct, updateProduct, deleteProduct 
} from '../controllers/productController.js';
import { uploadProductImage } from '../controllers/imageController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/upload-image', protectAdmin, uploadProductImage);
router.post('/', protectAdmin, createProduct);
router.put('/:id', protectAdmin, updateProduct);
router.delete('/:id', protectAdmin, deleteProduct);

export default router;
