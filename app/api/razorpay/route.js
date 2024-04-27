import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import payment from "@/app/models/payment";
import Razorpay from "razorpay";
import React from 'react'
import mongoose from "mongoose";

const Paymentchecker = async(req)=> {
  await mongoose.connect(`${process.env.DB}/payments`);
  let body = await req.formData();
  body = Object.fromEntries(body);
  let p = await payment.findOne({oid:body.razorpay_order_id})
  if(!p){
    return NextResponse.error("Order Id Not Found");
  }
    let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, "razorpay_payment_id": body.
    razorpay_payment_id, "razorpay_signature": body.razorpay_signature}, process.env.KEY_SECRET)

    if(xx){
      // Update the payment status
      const updatedPayment = await payment.findOneAndUpdate({oid: body.
      razorpay_order_id}, {done: "true"}, {new: true})
      return NextResponse.redirect(`${process.env.WEB_URL}/${updatedPayment.
      to_user}?paymentdone=true`)
      }

    
}

export default Paymentchecker