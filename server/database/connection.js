const mongoose = require('mongoose');

const connectDB = async() => {

        try{
            const con = await mongoose.connect(process.env.MONGO_URI, {
            })
        } catch(err){
            console.log(err);
            process.exit(1);
        }
        

        console.log('MongoDB connected');
    } 

module.exports = connectDB