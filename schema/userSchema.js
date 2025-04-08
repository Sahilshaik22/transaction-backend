const mongoose = require("mongoose")

const createAccount = new mongoose.Schema({
    customer_id:{
        type: String,
        unique:true,
        required: true
    },
    name: {
        type:String,
        required:true
    },
    balance:{
        type:Number,
        default:0
    }

})

const createAccountModel = mongoose.model("customer",createAccount)

module.exports = createAccountModel

