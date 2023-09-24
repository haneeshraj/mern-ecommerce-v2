import express from 'express';

import { protect, admin } from '../middleware/authMiddleware.js';
import {
  createProduct,
  createProductReview,
  deleteProductById,
  getProductById,
  getProducts,
  updateProduct,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router
  .route('/:id')
  .get(getProductById)
  .delete(deleteProductById)
  .put(protect, admin, updateProduct);

router.route('/:id/reviews').post(protect, createProductReview);

export default router;
