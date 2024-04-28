import mongoose from "mongoose";
const { Schema, model } = mongoose;

const MessageSchema = new Schema({
    name: { type: String,required:true},
    email: { type: String,required:true},
    phone: {type:Number},
    message: {type:String,required:true}
});
export default mongoose.models. messages || model("messages", MessageSchema);;