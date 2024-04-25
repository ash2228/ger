"use client";
import { React, useState } from "react";
import "@/app/support/style.css";
import Btn from "./btn";
import Btn2 from "./btn2";
import Script from "next/script";
import { initiate } from "../actions/useractions";

function Page() {
  const [name,setName] = useState("")
  let [paymentForm,setPaymentForm] = useState({})
  let [amt,setAmt] = useState(null);
  const pay = async (amount) => {
    let a = await initiate(amount,name,paymentForm)
    let orderid = a.id
    var options = {
      key: process.env.RAZ_ID, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Buy me a beer", //your business name
      description: {msg},
      image: "https://example.com/your_logo",
      order_id: orderid, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "https://locahost:3000/api/razorpay",
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: {name}, //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };
  const [msg, setMsg] = useState("");
  const [amount, setAmount] = useState(false);
  const changeHandler = (e) => {
    setPaymentForm({...paymentForm,[e.target.name]:[e.target.value]})
  };
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div>
        <img
          src="https://i.gifer.com/xK.gif"
          alt=""
          className="w-[100vw] lg:h-[400px]"
        />
      </div>
      <div className="h-auto pb-10 lg:w-[400px] m-5 lg:absolute top-[350px] left-[250px] rounded-3xl bg-white">
        <h1 className="p-10 font-mono font-semibold text-3xl">
          Buy Ash a Beer
        </h1>
        <div>
          <div>
            <span className="ml-10">Choose an amount:</span>
            <div className="ml-10 grid grid-flow-col gap-3 grid-rows-2">
              <div className="cursor-pointer bg-black text-white font-semibold font-sans px-5 rounded-full w-[70px]" onClick={()=>{setAmt(1000)}}>10</div>
              <div className="cursor-pointer bg-black text-white font-semibold font-sans px-5 rounded-full w-[70px]" onClick={()=>{setAmt(5000)}}>50</div>
              <div className="cursor-pointer bg-black text-white font-semibold font-sans px-5 rounded-full w-[70px]" onClick={()=>{setAmt(10000)}}>100</div>
              <div className="cursor-pointer bg-black text-white font-semibold font-sans px-5 rounded-full w-[70px]" onClick={()=>{setAmt(50000)}}>500</div>
              <div className="cursor-pointer bg-black text-white font-semibold font-sans px-5 rounded-full w-[70px]" onClick={()=>{setAmt(100000)}}>1000</div>
            </div>
          </div>
          <div>
            <div class="input-container">
              <input
                placeholder="Your Name"
                class="input-field"
                type="text"
                value={paymentForm.name}
                onChange={changeHandler}
                name="name"
              />
              <label for="input-field" class="input-label">
                Name
              </label>
              <span class="input-highlight"></span>
            </div>
          </div>
          <div>
            <div class="input-container">
              <input
                placeholder="Send Your Message"
                class="input-field"
                type="text"
                value={paymentForm.msg}
                onChange={changeHandler}
                name="message"
              />
              <label for="input-field" class="input-label">
                Message
              </label>
              <span class="input-highlight"></span>
            </div>
          </div>
          <div className="flex flex-col mx-10 gap-5 mt-10">
            <span>Choose payment method:</span>
            <div onClick={()=>{pay(amt)}}><Btn /></div>
            <Btn2 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
