const transactionModel = require("../schema/transactionSchema")
const transactionHistoryApi = async(req,res) =>{
    try{
        const {customer_id} = req.params
        if(!customer_id){
            return res.status(400).json({message:"customer_id is empty"})
        }

        const transactions= await transactionModel.find({customer_id})
        if(transactions.length === 0){
            return res.status(404).json({message: "No transactions found"})
        }
         return res.status(200).json({ customer_id, transactions });
        

    }catch{
        console.log("Error in transactionHistoryApi")
         return res.status(500).json({message:"internal server Error "})
    }

    

}


module.exports = transactionHistoryApi