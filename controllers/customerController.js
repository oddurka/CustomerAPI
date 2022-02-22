const Customer = require('../models/customers.js')

// GET all customers and handles queries
const getCustomers = async (req, res) =>{
    try{
        const filters = req.query
        const filteredCustomers = await Customer.find(filters)
        
        res.json(filteredCustomers)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
    
}

// GET one customer by ID
const getCustomer = async (req, res) => {
    res.json(res.customer)
}

// CREATE one customer
const createCustomer = async (req, res) => {
    const customer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
    })

    try {
        const newCustomer = await customer.save()
        res.status(201).json(newCustomer)
    } catch(err) {
        res.status(400).json({ message: err.message})
    }
}

// UPDATE one customer
const updateCustomer = async (req, res) => {
    if (req.body.firstName != null)
        res.customer.firstName = req.body.firstName
    if (req.body.lastName != null)
        res.customer.lastName = req.body.lastName
    if (req.body.age != null)
        res.customer.age = req.body.age
    if (req.body.phoneNumber != null)
        res.customer.phoneNumber = req.body.phoneNumber
    if (req.body.address != null)
        res.customer.address = req.body.address
    
    try {
        const updatedCustomer = await res.customer.save()
        res.json(updatedCustomer)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
    
}

// DELETE one customer
const deleteCustomer = async (req, res) => {
    try {
        await res.customer.remove()
        res.json({ message: 'Customer deleted'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {getCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer}