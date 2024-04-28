import React from 'react'
import "@/app/contacts/style.css"
function Page() {
  return (
    <>
    <div className='lg:h-[500px] lg:w-[800px] w-[100vw] h-[1100px] bg-black m-auto mt-10 text-white lg:block flex flex-col-reverse'>
        <div className='float-right flex flex-col lg:w-[50%] w-[100%] h-[50%] lg:h-[100%] gap-5'>
            <h1 className='font-serif mx-auto mt-[10%] text-3xl'>Contact Me</h1>
            <input type="text" className='border-2 w-[80%] ml-10 bg-transparent outline-0 px-5 py-1 rounded-full' placeholder='name' />
            <input type="text" className='border-2 w-[80%] ml-10 bg-transparent outline-0 px-5 py-1 rounded-full' placeholder='Email' />
            <input type="text" className='border-2 w-[80%] ml-10 bg-transparent outline-0 px-5 py-1 rounded-full' placeholder='Phone Number' />
            <textarea name="message" id="" cols="1" rows="5" placeholder='message' className='border-2 w-[80%] ml-10 bg-transparent outline-0 px-5 py-1 rounded-3xl'></textarea>
            <button className='rounded-full w-[100px] bg-white text-black px-5 py-1 font-serif ml-10'>Send</button>
        </div>
        <div className='border img m-0 lg:w-[50%] lg:h-[100%] w-[100%] h-[50%]'></div>
    </div>
    </>
  )
}

export default Page