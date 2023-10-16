const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    stock: {
        type: Number,
        require: true,
    },
    // new 
    size: {
        type: String,
        require: true,
    },
    color: {
        type: String,
        require: true,
    },
    // end 
    price: {
        type: Number,
        require: true
    },
})
module.exports = mongoose.model("Product", ProductSchema);