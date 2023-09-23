import express from 'express';

import {
  deleteProductById,
  getProductById,
  getProducts,
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);

router.route('/:id').get(getProductById).delete(deleteProductById);

export default router;
