import express from 'express';
import {
  getCustomerForm,
  postCustomer,
} from '../controllers/customers.controller.js';

const router = express.Router();

router.get('/customers', getCustomerForm);
router.post('/customers', postCustomer);

export default router;