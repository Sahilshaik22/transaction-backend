const mongoose = require("mongoose")

const connectDb = async(mongourl) =>{
    try{
        await mongoose.connect(mongourl)

    }catch(error){
        console.log("Error in connecting Db")
    }
}

module.exports = connectDb