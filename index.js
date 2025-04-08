const express = require("express")
const config = require("../server/dotenv/dotenv")
const connectDb = require("../server/connectDb/connectDb")
const customer = require("../server/routes/createAccounrRoute")
const trasactionController = require("../server/routes/transactionRoute")
const getBalance = require("../server/routes/getBalanceRoute")
const transactionHistoryRoute = require("../server/routes/transactionHistoryRoute")

const app = express()
const cors = require("cors")
app.use(express.json())

app.use(cors())
app.use("/customers",customer)
app.use("/transactions",trasactionController)
app.use("/customers",getBalance)
app.use("/customers",transactionHistoryRoute)

const PORT = 3000;


const connectServer = async() =>{
    try{
        await connectDb(config.mongourl)
        console.log("connected to database")
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`)
        })
    }catch{
        console.log("Error connecting to database")
    }
}

connectServer()
