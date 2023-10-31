const express = require('express')
const router = express.Router()

const UserRouter = require('./users')

router.use("/", UserRouter)

module.exports(router)