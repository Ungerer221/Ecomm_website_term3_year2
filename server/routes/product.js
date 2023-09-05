const express = require('express')
const ProductSchema = require('../models/product')
const router = express()

require('dotenv/config')


// adding a product
router.post('/api/addProduct/', async (req, res) => {
    const product = new ProductSchema({ ...req.body })
    await product.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

// to get product 
router.get('/api/product', async (req, res) => {
    const findProduct = await ProductSchema.find();
    res.json(findProduct)
})

// DELETE
router.delete('/api/deleteProduct/:id', async (req, res) => {
    // const { id } = req.params._id
    await ProductSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

// getting a specific item 

module.exports = router;