const express = require('express')

//Create express application
const app = express()

const requestTimestampLogger = (req,res,next) => {
    const timestamp = new Date().toISOString()
    console.log(`${timestamp} from ${req.method} to ${req.url}`)
    next()
}

app.use(requestTimestampLogger)


app.get('/',(req,res) => {
 res.send('Home Page')
})

app.get('/about',(req,res) => {
 res.send('About Page')
})

app.listen(3000,()=> {
    console.log('Server is now running on port 3000')
})