const mongoose = require("mongoose");

const ENV_VARS = require("./envVars.js");

const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI)
        console.log("Mongodb connected"+conn.connection.host);
    }catch(err){
        console.log("error occured"+err);
        process.exit(1);
    }
}

module.exports = connectDB;