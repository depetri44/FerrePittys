const mongoose = require('mongoose');
const db = process.env.MONGO_URI;
const dotenv = require('dotenv');  
dotenv.config();
mongoose.set('strictQuery', true);

const connectDatabase =async()=>{
    try {

        await mongoose.connect(db);
        console.log('MongoDB is Connected...')
    } catch (err) {
        console.error(err.message);
        console.log('Check Your ENV VAR')
        process.exit(1)
    }
} 
module.exports = connectDatabase;