const express = require('express')
const router = express.Router()
const sendHubsController = require('../controller/sendHubsController')

router.post("/trade-routes", sendHubsController.sendWantedRoutes)

module.exports = router