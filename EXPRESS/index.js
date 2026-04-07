const express = require('express')

//Create express application
const app = express()

//Create Route for root URL
app.get('/',(req,res) => {
    res.send('Hello World')
})

//Start server on a port
const port = 3000
app.listen(port, () => {
    console.log(`Server is now running at port ${port}`)
})