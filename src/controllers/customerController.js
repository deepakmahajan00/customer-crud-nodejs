const customerModel = require('../models/customerModel');

class CustomerController {
    async createCustomer(req, res) {
        try {
            const { name, email, age } = req.body;
            const newCustoner = await customerModel.create(name, email, age);
            return res.status(201).json(newCustoner);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
        
    }

    async getAllCustomers(req, res) {
        try {
            const customers = await customerModel.getAll();
            if (!customers.length) return res.status(404).json({ message: 'No customer found!' });
            return res.json(customers);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    async getCustomerById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const customer = await customerModel.getById(id);
            if (!customer.length) return res.status(404).json({ message: 'No customer found!' });
            return res.json(customer);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

    async updateCustomerById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { name, email, age } = req.body;
            const updatedCustomer = await customerModel.update(id, name, email, age);
            return res.json(updatedCustomer);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async deleteCustomerById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const isCustomerDeleted = await customerModel.delete(id);
        
            return res.json(isCustomerDeleted);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = new CustomerController();