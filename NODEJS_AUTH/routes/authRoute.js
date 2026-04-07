const express = require('express')
const {registerUser, loginUser, changePassword} = require('../controllers/AuthController')
const router = express.Router()
const authMiddleware = require('../middleware/auth-middleware')

router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/changepassword', authMiddleware,changePassword)
module.exports = router
