require('dotenv').config()
const express = require('express')
const connectToDB = require('./database/db')
const bookRoutes = require('./routes/book-routes')

const app = express()

const PORT = process.env.PORT || 3001

//Connect to our database
connectToDB()

//Middleware -> express.json
app.use(express.json())

//Routes Here
app.use('/api/books',bookRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})