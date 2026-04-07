const express = require('express')

//Create express application
const app = express()

app.get('/',(req,res) => {
    res.send('Welcome to home page')
})

app.get('/products',(req,res) => {
    const products = [
        {
            id:1,
            label:'Product 1'
        },
        {
            id:2,
            label:'Product 2'
        },
        {
            id:3,
            label:'Product 3'
        }
    ]
    res.json(products);
})
//Get Single product
app.get('/products/:id', (req,res) => {
    const productId = parseInt(req.params.id)
    const products = [
        {
            id:1,
            label:'Product 1'
        },
        {
            id:2,
            label:'Product 2'
        },
        {
            id:3,
            label:'Product 3'
        }
    ]

    const getSingleProduct = products.find(product => product.id === productId)
    if(getSingleProduct) {
        res.json(getSingleProduct)
    } else {
        res.status(404).send('Product is not found please find with different ID')
    }
})

//Start server on a port
const port = 3000
app.listen(port, () => {
    console.log(`Server is now running at port ${port}`)
})