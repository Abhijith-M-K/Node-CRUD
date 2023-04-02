import mongoose from "mongoose";

const cameraSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    modelName:{
        type:String,
        required:true,
    },
    created:{
        type:Date,
        required:true,
        default:Date.now()
    }

},
{ timestamps: true });

const cameraModel = mongoose.model("Camera", cameraSchema);
export default cameraModel;