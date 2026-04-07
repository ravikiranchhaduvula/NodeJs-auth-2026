const express = require('express')
const authMiddleware = require('../middleware/auth-middleware')
const router = express.Router()

//Protecting this route using middleware
router.get('/welcome',authMiddleware,(req,res) => {
    //In-order to pass this information to the UI
    const {userName, userId, role} = req.userInfo
    res.json({
        message:'Welcome to home page',
        user: {
            _id:userId,
            userName,
            role
        }
    })
})

module.exports = router