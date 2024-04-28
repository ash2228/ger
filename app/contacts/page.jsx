"use client"
import React, { useState,useEffect } from 'react'
import "@/app/contacts/style.css"
import { sendMsg } from '../actions/useractions'
import Success from '@/components/success'

const Page = ()=> {
    let [err,setErr] = useState(null)
    let [success,setSuccess] = useState(null)
    let [msgform,setMsgform] = useState([]);
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [message,setMessage] = useState("");
    let [phone,setPhone] = useState("");

    useEffect(() => {
      setTimeout(() => {
        setErr(null)
      }, 2000);
    }, [err])
    useEffect(() => {
      setTimeout(() => {
        setSuccess(null)
      }, 2000);
    }, [success])
    
    
    const msgHandler = async ()=>{
        let res = await sendMsg(name,email,phone,message)
        if(res==true){
        setSuccess("Message Sent!")
        }
        if(res==false){
            setErr("Message Failed")
        }
    }
    const changeHandler = (e)=>{
        setMsgform({...msgform,[e.target.name]:[e.target.value]})
        if(e.target.name=="name"){
            setName(e.target.value)
        }
        if(e.target.name=="phone"){
            setPhone(e.target.value)
        }
        if(e.target.name=="message"){
            setMessage(e.target.value)
        }
        if(e.target.name=="email"){
            setEmail(e.target.value)
        }
    }
  return (
    <>
    <div className='lg:h-[530px] lg:w-[850px] w-[100vw] h-[900px] bg-black m-auto mt-10 text-white lg:block flex flex-col-reverse'>
        <div className='float-right flex flex-col lg:w-[50%] w-[100%] h-[50%] lg:h-[100%] gap-5'>
            <h1 className='font-serif mx-auto mt-[10%] text-3xl'>Contact Me</h1>
            <input type="text" className='border-2 w-[80%] ml-10 bg-transparent outline-0 px-5 py-1 rounded-full' placeholder='name' name='name' onChange={changeHandler} value={name} />
            <input type="text" className='border-2 w-[80%] ml-10 bg-transparent outline-0 px-5 py-1 rounded-full' placeholder='email'name='email' onChange={changeHandler} value={email}/>
            <input type="text" className='border-2 w-[80%] ml-10 bg-transparent outline-0 px-5 py-1 rounded-full' placeholder='phone number' name='phone' onChange={changeHandler} value={phone}/>
            <textarea name="message" id="" cols="1" rows="5" placeholder='message' className='border-2 w-[80%] ml-10 bg-transparent outline-0 px-5 py-1 rounded-3xl' onChange={changeHandler} value={message}></textarea>
            <button
  className='rounded-full w-[100px] bg-white text-black px-5 py-1 font-serif ml-10'
  onClick={() => {
    if (!msgform.name) {
      setErr("Enter a Name first!");
    } else if (!msgform.email) {
      setErr("Enter an Email first!");
    } else if (!msgform.phone) {
      setErr("Enter a Phone Number first!");
    } else if (!msgform.message) {
      setErr("Enter a Message first!");
    } else {
      msgHandler();
    }
  }}
>
  Send
</button>
        </div>
        <div className='border-b-2 lg:border-r-2 img m-0 lg:w-[50%] lg:h-[100%] w-[100%] h-[50%]'></div>
    </div>
    <div className={`${success==null&&err==null?"hidden":"block"}`}>
    <Success msg={success?"true":err}/>
    </div>
    </>
  )
}

export default Page