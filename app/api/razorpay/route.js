import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import payment from "@/app/models/payment";
import mongoose from "mongoose";
import fs from "fs/promises"

export const POST = async(req)=> {
  await mongoose.connect(`mongodb+srv://ashmeet:hdsotwas@payments.frhs4mg.mongodb.net/payments`);
  let body = await req.formData();
  body = Object.fromEntries(body);
  let p = await payment.findOne({oid:body.razorpay_order_id})
  if(!p){
    return NextResponse.json({success:false,message:"Order Id Not Found"});
  }
    let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.
    razorpay_payment_id},body.razorpay_signature, process.env.RAZ_SECRET)

    if(xx){
      // Update the payment status
      const updatedPayment = await payment.findOneAndUpdate({oid: body.
      razorpay_order_id}, {done: "true"}, {new: true})
      return NextResponse.redirect(`${process.env.WEB_URL}/?paymentdone=true`)
      }
      else{
        return NextResponse.json({success:false,message:"Payment verification failed"})
      }
    
}
export const GET = async(req)=> {
  await mongoose.connect(`mongodb+srv://ashmeet:hdsotwas@payments.frhs4mg.mongodb.net/payments`);
  let body = await req.formData();
  body = Object.fromEntries(body);
  let p = await payment.findOne({oid:body.razorpay_order_id})
  if(!p){
    return NextResponse.json({success:false,message:"Order Id Not Found"});
  }
    let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.
    razorpay_payment_id},body.razorpay_signature, process.env.RAZ_SECRET)

    if(xx){
      // Update the payment status
      const updatedPayment = await payment.findOneAndUpdate({oid: body.
      razorpay_order_id}, {done: "true"}, {new: true})
      return NextResponse.redirect(`${process.env.WEB_URL}/?paymentdone=true`)
      }
      else{
        return NextResponse.json({success:false,message:"Payment verification failed"})
      }
    
}
