const dotenv =  require("dotenv")
const { mongo } = require("mongoose")

dotenv.config()

module.exports= {

    mongourl: process.env.MONGO_DB

}