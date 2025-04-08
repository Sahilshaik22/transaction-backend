const express = require("express")
const transactionHistoryApi = require("../middleware/transactionHistoryApi")

const router = express()

router.get("/:customer_id/transactions",transactionHistoryApi)


module.exports = router;