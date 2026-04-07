const express = require('express')

//Create express application
const app = express()

//Define Middleware function
const myFirstMiddleware = (req,res,next) => {
 console.log('This Middleware function runs on every request')
 next()
}

//Appied to all the routes
app.use(myFirstMiddleware)

app.get('/',(req,res) => {
 res.send('Home Page')
})

app.get('/about',(req,res) => {
 res.send('About Page')
})

app.listen(3000,()=> {
    console.log('Server is now running on port 3000')
})