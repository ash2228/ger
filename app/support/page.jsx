"use client"
import { React, useEffect, useState } from "react";
import "@/app/support/style.css";
import Btn from "./btn";
import Btn2 from "./btn2";
import Script from "next/script";
import { initiate } from "../actions/useractions";
import { fetchpayments } from "../actions/useractions";
import { ToastContainer, toast } from 'react-toastify'



function Page() {
  
  let [paymentForm,setPaymentForm] = useState({})
  let [name,setName] = useState("");
  let [msg,setMsg] = useState("");
  let [amt,setAmt] = useState(100);
  const pay = async (amount) => {
    let a = await initiate(amount,msg,paymentForm,name,msg)
    let orderid = a.id
    var options = {
      key: process.env.RAZ_ID, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Buy me a beer", //your business name
      description: paymentForm.msg,
      image: "https://example.com/your_logo",
      order_id: orderid, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: paymentForm.name, //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#000000",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };
  const changeHandler = (e) => {
    setPaymentForm({...paymentForm,[e.target.name]:[e.target.value]})
    if(e.target.name=="name"){
      setName(e.target.value)
    }
    if(e.target.name=="msg"){
      setMsg(e.target.value)
    }
  };
  const [noti,setNoti] = useState("");
  const [payments,setPayments] = useState([]);
  const getData = async ()=>{
    let a = await fetchpayments();
    setPayments(a)

  }
  useEffect(()=>{
    getData()
  },[])
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
        <h1 className="p-10 font-mono font-semibold text-3xl ">
          Buy Ash a Beer
        </h1>
        <div className="flex gap-5 pl-2 mx-4">
          <button className={`${amt==100?"bg-blue-500 text-white":"text-blue-500 border"} p-3 rounded-full`} onClick={()=>{setAmt(100)}}>₹100</button>
          <button className={`${amt==200?"bg-blue-500 text-white":"text-blue-500 border"} p-3 rounded-full`} onClick={()=>{setAmt(200)}}>₹200</button>
          <button className={`${amt==500?"bg-blue-500 text-white":"text-blue-500 border"} p-3 rounded-full`} onClick={()=>{setAmt(500)}}>₹500</button>
          <input type="text" className="w-12 pl-2 outline-none border" value={amt} onChange={(e)=>{isNaN(parseInt(e.target.value))?setAmt(0):setAmt(parseInt(e.target.value))}}/>
        </div>
        <div>
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
                name="msg"
              />
              <label for="input-field" class="input-label">
                Message
              </label>
              <span class="input-highlight"></span>
            </div>
          </div>
          <div className="flex flex-col mx-10 gap-5 mt-10">
            <span>Choose payment method:</span>
            <div className="w-28" onClick={()=>{msg?amt>=1?name?pay(amt*100):setNoti("Enter Your Name First!"):setNoti("Amount Cannot Be Less Than 10!(Loose your pocket a little bit misser)"):setNoti("Enter A Message First!")}}><Btn /></div>
            <div className="text-red-600">{noti}</div>
            <Btn2 />
          </div>
        </div>
      </div>
      <div className="h-auto w-[300px] bg-white rounded-3xl mx-auto p-5 lg:absolute left-[1000px]">
        <h1 className="text-center font-medium fontsemibold">Supporters</h1>
        <div>
        {payments.map(item =>{ 
        return <h1 className="font-medium mt-5" key={item.key}>{item.name} donated <span className="font-bold">₹{item.amount}</span><h1 className="font-normal">{item.message}</h1></h1>
        
        })}
        </div>
      </div>
    </>
  );
}

export default Page;
