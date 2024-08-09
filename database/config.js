const mongoose = require('mongoose')

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('MongoDB connected successfully!')

    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnection //Export function dbConnection

