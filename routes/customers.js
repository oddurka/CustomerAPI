const express = require('express')
const Customer = require('../models/customers.js')

const {getCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer} = require('../controllers/customerController.js')

const router = express.Router()

// GET all customers
router.get('/', getCustomers)

// GET one customer by ID
router.get('/:id', getCustomerById, getCustomer)

// CREATE one customer
router.post('/', createCustomer)

// UPDATE one customer
router.patch('/:id', getCustomerById, updateCustomer)

// DELETE one customer
router.delete('/:id', getCustomerById, deleteCustomer)

// Finds customers by their ID
async function getCustomerById(req, res, next) {
    try {
        customer = await Customer.findById(req.params.id)

        if (customer === null) {
            return res.status(400).json("Can't find customer")
        }
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }

    res.customer = customer
    next()
}

module.exports = router