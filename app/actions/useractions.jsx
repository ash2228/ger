"use server"
import Razorpay from "razorpay"
import payment from "../models/payment"
import mongoose from "mongoose"

export const initiate = async(amount,to_username,paymentForm,Name)=>{
    await mongoose.connect(`${process.env.db}/payments`);
    var instance = new Razorpay({ key_id: 'rzp_live_phNillhV9nNSIy', key_secret: 'm781uT18S4vNSfWpStfELQfA' })
    let options = {
        amount:Number.parseInt(amount),
        currency:"INR"
    }
    let x = await instance.orders.create(options);
    await payment.create({oid:x.id,amount:amount/100,to_user:to_username,name:Name,paymentForm:paymentForm})
    return x;
}