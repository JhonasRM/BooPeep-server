const express = require('express')
const router = express.Router()

const UserRouter = require('./users')
const postRouter = require('./post')

router.use("/", UserRouter)
router.use("/", postRouter)

export default router