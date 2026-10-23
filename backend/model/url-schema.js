import mongoose, { Schema } from "mongoose";

const UrlSchema = new mongoose.Schema({
    shortId:{
        type:"string",
        required:true,
        unique:true
    },
    redirectUrl:{
        type:"string",
        required:true,
    }
})

const URL = mongoose.model("urlShort",UrlSchema);

export default URL;