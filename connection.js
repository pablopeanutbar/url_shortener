import mongoose from "mongoose";

async function connectMongoDB(){

await mongoose.connect('mongodb://127.0.0.1:27017/url-shortner')
.then(()=>console.log("MongoDB connected"))
.catch(()=>console.log("MongoDB connection error"))
console.log(mongoose.connection.name)
}

export default connectMongoDB;