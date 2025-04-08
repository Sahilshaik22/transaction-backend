const express = require("express")
const transactionApi = require("../middleware/transactionApi")

const router = express()

router.post("/",transactionApi)


module.exports = router;