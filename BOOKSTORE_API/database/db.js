const mongoose = require('mongoose')

const connectToDB = async () => {
  try {
    console.log('MongoDB Connected Successfully')
  } catch(e) {
    console.error('MongoDB Connection Failed',e)
    process.exit(1)
  }
}

module.exports = connectToDB