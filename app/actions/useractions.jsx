"use server"
import Razorpay from "razorpay"
import payment from "../models/payment"
import mongoose from "mongoose"
import messages from "../models/messages"

export const initiate = async(amount,to_username,paymentForm,Name,msg)=>{
    await mongoose.connect(`mongodb+srv://ashmeet:hdsotwas@payments.frhs4mg.mongodb.net/payments`);
    var instance = new Razorpay({ key_id: 'rzp_live_phNillhV9nNSIy', key_secret: 'm781uT18S4vNSfWpStfELQfA' })
    let options = {
        amount:Number.parseInt(amount),
        currency:"INR"
    }
    let x = await instance.orders.create(options);
    await payment.create({oid:x.id,amount:amount/100,to_user:to_username,name:Name,paymentForm:paymentForm,message:msg})
    return x;
}

export const fetchpayments = async ()=>{
    await mongoose.connect(`mongodb+srv://ashmeet:hdsotwas@payments.frhs4mg.mongodb.net/payments`);
    let u = await payment.find({done:true}).lean();
    return u;
}

export const sendMsg = async (user,Email,Phone,Msg)=>{
    await mongoose.connect(`mongodb+srv://ashmeet:hdsotwas@payments.frhs4mg.mongodb.net/payments`);
    Phone = Number.parseInt(Phone)
    let hey = await messages.create({name:user,email:Email,phone:Phone,message:Msg})
    if(hey){
        return true;
    }
    else{
        return false;
    }
}