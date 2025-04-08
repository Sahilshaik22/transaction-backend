const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({
    transaction_id:{
        type:String,
        required:true,
        unique:true
    },
    customer_id:{
        type:String,
        required:true

    },
    type:{
        type:String,
        enum:["debit","credit"],
        required:true
    },

    amount:{
        type:Number,
        required:true
    },

    status:{
        type:String,
        enum:["success","failed"],
    },
    created_at:{
        type:Date,
        default:Date.now
    }
    
    

})

const transactionModel = mongoose.model("transaction",transactionSchema)

module.exports =  transactionModel