const express = require("express")
const customerApi = require("../middleware/customerApi")

const router = express()

router.post("/",customerApi)

module.exports = router