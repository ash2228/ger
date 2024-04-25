"use server"
import Razorpay from "razorpay"

export const initiate = async(amount,to_username,paymentForm)=>{
    var instance = new Razorpay({ key_id: 'rzp_live_phNillhV9nNSIy', key_secret: 'm781uT18S4vNSfWpStfELQfA' })
    let options = {
        amount:Number.parseInt(amount),
        currency:"INR"
    }
    let x = await instance.orders.create(options);
    return x;
}