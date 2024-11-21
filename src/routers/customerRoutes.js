const express = require('express');
const CustomerController = require('../controllers/customerController');
const { validateCreateCustomer } = require('../validators/customerValidator');
const customerController = require('../controllers/customerController');
const router = express.Router();

// Apply validation middleware
router.post('/', validateCreateCustomer, CustomerController.createCustomer);
router.get('/', CustomerController.getAllCustomers);
router.get('/:id', validateCreateCustomer, CustomerController.getCustomerById);
router.put('/:id', validateCreateCustomer, customerController.updateCustomerById);
router.delete('/:id', validateCreateCustomer, customerController.deleteCustomerById);

module.exports = router;