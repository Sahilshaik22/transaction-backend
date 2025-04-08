const express = require("express")
const getBalanceApi = require("../middleware/getBalanceApi")

const router = express.Router()


router.get("/:customer_id/balance", getBalanceApi)


module.exports = router