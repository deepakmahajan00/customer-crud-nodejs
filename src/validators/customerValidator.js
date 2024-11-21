const { param, body, validationResult } = require('express-validator');

// Validation Rules
const validateCreateCustomer = [
    body('name').isString().withMessage('name must be a string').notEmpty().withMessage('name is required'),
    body('email').isEmail().withMessage('Invalid email format').notEmpty().withMessage('Email is required'),
    body('age').optional().isInt({ min: 18 }).withMessage('Age must be a number and at least 18'),
    param('id').optional().isInt({ min: 1 }).withMessage('Id must be a number'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateCreateCustomer };