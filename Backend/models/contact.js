import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    fname:String,
    lname:String,
    mobile:Number,
    email:String,
    address:String,
    msg:String
})

const contactModel = mongoose.model("contact",contactSchema)
export default contactModel