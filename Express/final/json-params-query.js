const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req,res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">PRODUCTS</a>')
})

app.get('/api/products', (req,res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productId', (req,res) => {
    const {productId} = req.params
    const singleProduct = products.find((product) => product.id === Number(productId))
    res.json(singleProduct)
})

app.get('/api/v1/query', (req,res) => {
    const {search, limit} = req.query
    let sortedProducts = [...products]
    
    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }

    if (sortedProducts.length < 1) {
        return res.status(400).json({success: false, msg: 'No products found'})
    }
    res.status(200).json(sortedProducts)
})

app.all('*', (req,res) => {
    res.status(404).send('<h1>404</h1><p>Page Not Found</h1>')
})

app.listen(5000,() => {
    console.log('Server is running on http://localhost:5000')
})  