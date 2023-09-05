const express = require('express')
const CartProductSchema = require('../models/cartproduct')
const router = express()

require('dotenv/config')

// adding a product
router.post('/api/addCartProduct/', async (req, res) => {
    const cartproduct = new CartProductSchema({ ...req.body })
    await cartproduct.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

// to get product 
router.get('/api/Cartproduct', async (req, res) => {
    const findCartProduct = await CartProductSchema.find();
    res.json(findCartProduct)
})

// DELETE
router.delete('/api/deleteCartProduct/:id', async (req, res) => {
    // const { id } = req.params._id
    await CartProductSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router;