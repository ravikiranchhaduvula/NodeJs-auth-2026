require('dotenv').config()

const express = require('express')
const connectToDB = require('./db/db')
const authRoutes = require('./routes/authRoute')
const homeRoutes = require('./routes/homeRoutes')
const adminRoutes = require('./routes/adminRoutes')
const uploadImageRoutes = require('./routes/imageRoutes')

connectToDB()

const app = express()
//Middleware
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use('/api/auth', authRoutes)
app.use('/api/home', homeRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/image', uploadImageRoutes)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})