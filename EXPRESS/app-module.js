const express = require('express')

//Create express application
const app = express()

//Application Level Settings
app.set('view engine', 'ejs')

//Routing
app.get('/',(req,res) => {
    res.send('home page')
})

app.post('/api/data', (req,res) => {
    res.json({
        message:'Data Received',
        data:req.body
    })
})

//Error Handling Middleware
app.use((err, req, res, next) => {
 console.log(err.stack)
 res.status(500).send('Something went wrong')
})