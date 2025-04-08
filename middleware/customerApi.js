const userModel = require("../schema/userSchema")
const { v4: uuidv4 } = require("uuid");
const customerApi = async(req,res)=>{
    try{
        const {name,initial_balance} = req.body;
        if(!name || !initial_balance){
            return res.status(400).json({message:"Please enter all fields"})
        }
        const user = await userModel.create(
                {name:name,
                balance:initial_balance,
                customer_id:uuidv4()
                }
                
            )
        console.log(user)
        return res.status(200).json({message:"User registered Successfull",
            customer_id:user.customer_id,
            name:user.name, 
            balance:user.balance
        })
        
        }catch(error){
        console.log("error in customerApi")
    }
}

module.exports = customerApi