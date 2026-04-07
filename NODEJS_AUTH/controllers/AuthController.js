const UserModel = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//Register controller
const registerUser = async (req,res)=>{
    try {
      // Extract User information from the request body
     const {userName,email,password, role} = req.body
     //Check if user already exists in database
     const checkExistingUser = await UserModel.findOne({ $or: [{ userName: userName }, { email: email }]})
     if(checkExistingUser) {
        return res.status(400).json({
            success:false,
            message:'User already exists with given userName or email, please try with different values'
        })
     }
      // Hash User Password
     const salt = await bcrypt.genSalt(10)
     const hashedPassword = await bcrypt.hash(password,salt)
     //Create a new user and save to database
     const newlyCreatedUser = new UserModel({
        userName,
        email,
        password:hashedPassword,
        role:role || 'user'
     })

     await newlyCreatedUser.save()

     if(newlyCreatedUser){
        res.status(201).json({
            success:true,
            message:'User Registered successfully'
        })
     } else {
        res.status(400).json({
            success:false,
            message:'Unable to register user! please try again'
        })
     }
    } catch(e) {
        console.error(e)
        res.status(500).json({
            success:false,
            message:'Something went wrong! please try again'
        })
    }
}

//Login controller
const loginUser = async (req,res) => {
    try {
      const {userName, password} = req.body
      //Check if the user exists in database or not
      const user = await UserModel.findOne({userName})
      if(user) {
        //If the password is correct or not
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if(!isPasswordMatch) {
             return res.status(404).json({
            success:false,
            message:'Invalid credentials'
        })
        }

        //Create User Token
        const accessToken = jwt.sign({
            userId:user._id,
            userName:user.userName,
            role:user.role
        },process.env.JWT_SECRET_KEY, {
            expiresIn: '15m'
        })

        res.status(200).json({
            success:true,
            message:'Logged in successful',
            accessToken
        })
      } else {
        return res.status(404).json({
            success:false,
            message:'User Doesnot exist'
        })
      }
    } catch(e) {
        console.error(e)
        res.status(500).json({
            success:false,
            message:'Something went wrong! please try again'
        })
    }
}

const changePassword = async (req,res) => {
 try {
   // You must be first logged in to change the password 
   const userId = req.userInfo.userId

   // Extract old and new password
   const {oldPassword, newPassword} = req.body

   //Find the current logged in user
   const user = await UserModel.findById(userId)
   if(!user) {
     return res.status(400).json({
        success:false,
        message:'User Not Found'
     })
   }
   //Check if the old password is correct
   const isPasswordMatch = await bcrypt.compare(oldPassword, user.password)
   if(!isPasswordMatch) {
     return res.status(400).json({
        success:false,
        message:'Old password is not correct please try again'
     })
   }
   //Hash the new password here
   const salt = await bcrypt.genSalt(10);
   const newHashedPassword = await bcrypt.hash(newPassword,salt)
   //Update user password
   user.password = newHashedPassword
   await user.save()
   res.status(200).json({
     success:true,
     message:'Password changed successfully'
   })
 } catch(e) {
        console.error(e)
        res.status(500).json({
            success:false,
            message:'Something went wrong! please try again'
        })
    }
}

module.exports = {registerUser, loginUser, changePassword}