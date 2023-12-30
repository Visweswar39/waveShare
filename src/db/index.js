import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js'; 
async function connectDB(){
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Database connection successful with host id ",connectionInstance.connection.host);
    }
    catch(error){
        console.log("MongoDb connection failed : ", error);
        process.exit(1);
    }
}

export default connectDB;