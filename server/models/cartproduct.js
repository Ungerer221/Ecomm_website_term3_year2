const mongoose = require ('mongoose');

const CartProductSchema = mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    type: {
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price: {
        type:Number,
        require:true
    },
})
module.exports = mongoose.model("CartProduct",CartProductSchema);