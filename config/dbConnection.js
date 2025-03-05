const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        // DATABASE_URI=mongodb://username:password@host:port/database
        
const DATABASE_URI="mongodb://localhost:27017/myDB"
        // await mongoose.connect(process.env.DATABASE_URI)
        await mongoose.connect(DATABASE_URI)
    } catch (err) {
        console.error("*****error connection to DB****\n" + err)
    }
}
module.exports = connectDB
