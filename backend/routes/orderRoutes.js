import express from 'express';

import {
  getAllOrders,
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
} from '../controllers/orderControllers.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(protect, admin, getAllOrders)
  .post(protect, addOrderItems);
router.route('/mine').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;
