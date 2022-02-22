const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 5000

const customersRoutes = require('./routes/customers.js')

// Connection to the mongodb database
mongoose.connect('mongodb+srv://demo:demo12345@cluster0.bgbtv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use('/customers', customersRoutes)

app.get('/', (req, res) => res.send(`Go to http://localhost:${PORT}/customers`))

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))