const { v4: uuidv4 } = require("uuid");
const userModel = require("../schema/userSchema");
const transcationModel = require("../schema/transactionSchema")
const mongoose = require("mongoose");
const transactionController = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { customer_id, type, amount } = req.body;
    if(!customer_id || !type || !amount){
        return res.status(400).json({message: "Please fill all fields."});
    }
    const user = await userModel.findOne({customer_id}).session(session)
    if(!user){
        return res.status(404).json({message: "customer_id not found"});
    }

    if(type=="debit" && user.balance < amount){
        return res.status(400).json({message: "Insufficient balance"});
    }
    if(type=="debit"){
        user.balance -= amount;
    }
    else if (type=="credit"){
        user.balance += amount;
    }

    await user.save({session})

    const transaction_user = await transcationModel.create([
        {
            transaction_id:uuidv4(),
            customer_id:customer_id,
            type:type,
            amount:amount,
            status:"success"
        }
    ],{session})


    await session.commitTransaction()
    await session.endSession()

    res.status(200).json({
        transaction_id:transaction_user[0].transaction_id,
        status:transaction_user[0].status,
        balance:user.balance
    })

  } catch {
    await session.abortTransaction()
    await session.endSession()
    res.status(500).send({ message: "Transcation failed" });
  }

//   try{
//     const transaction_user = await transcationModel.create(
//         {
//             transaction_id:uuidv4(),
//             customer_id:customer_id,
//             type:type,
//             amount:amount,
//             status:"failed"
//         } 
// )



//   }catch{
//     res.status(500).send({ message: "Transcation failed" });

//   }

//   return res.status(500).json({
//     customer_id:customer_id,
//     status:"failed",
//     message: "Transcation failed",
//     amount:amount,
//     type:type,


//   })



};

module.exports = transactionController;
