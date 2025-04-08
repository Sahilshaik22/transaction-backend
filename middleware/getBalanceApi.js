const userModel = require("../schema/userSchema")
const getBalanceApi =async (req,res)=>{
   
    try{
        const {customer_id} = req.params
        if(!customer_id){
            return res.status(400).json({message:"customer_id is empty"})
        }

        const user = await userModel.findOne({customer_id:customer_id})
        if(!user){
            return res.status(404).json({message:"Customer_id not found"})
        }
        const balance = user.balance
        res.status(200).json({customer_id:customer_id,balance:balance})



    }catch{
        res.status(500).json({message:"Error in getBalanceApi"})
    }

    

}

module.exports = getBalanceApi