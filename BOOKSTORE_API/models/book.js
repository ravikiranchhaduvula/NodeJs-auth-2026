const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Book Title is required'],
        trim:true,
        maxLength:[100, 'Book title cannot be more than 100 characters']
    },
    year:{
        type:Number,
        required:[true,'Publication Year is required'],
        min:[1000, 'Year must be atleast 1000'],
        max:[new Date().getFullYear(),'Year cannot be in future']
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("Book", BookSchema)
//This kind of export is required for the mongoDB operations