const mongoose = require('mongoose')

const connectToDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://mysticsruthi:Renstimpy%40123@cluster0.1fzb5zf.mongodb.net/')
    console.log('MongoDB Connected Successfully')
  } catch(e) {
    console.error('MongoDB Connection Failed',e)
    process.exit(1)
  }
}

module.exports = connectToDB