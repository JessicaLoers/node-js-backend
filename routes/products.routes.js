import express from 'express';

import {
  listProducts,
  getProductForm,
  postProduct,
} from '../controllers/products.controller.js';

const router = express.Router();

router.get('/', getProductForm);
router.get('/products', listProducts)
router.post('/products', postProduct);

export default router;