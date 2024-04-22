"use client"
import './page.css'
import { useState } from 'react'
export default function Home(){
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    const scrollContainer = document.getElementById("scrollContainer");
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: -200, // Adjust this value based on your design
        behavior: "smooth",
      });
      setScrollPosition(scrollContainer.scrollLeft - 200);
    }
  };

  const scrollRight = () => {
    const scrollContainer = document.getElementById("scrollContainer");
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: 200, // Adjust this value based on your design
        behavior: "smooth",
      });
      setScrollPosition(scrollContainer.scrollLeft + 200);
    }
  };
  return(<>
  <div className="bg-white font-light px-10 lg:text-center lg:py-3 py-4">
    Buy me a beer and get featured on this page. <a href="" className="text-blue-500">Learn More{">>"}</a>
  </div>
  <div className="px-5 pt-16 lg:ml-[120px] lg:w-[500px] ">
    <span className="inline text-3xl font-semibold text-gray-500"><h1 className="inline text-black">Crypto. </h1>The best way to support me.
    </span>
  </div>
  <div className="border-black border h-[40px] w-[40px] ml-5 mt-10 lg:mt-0 lg:absolute lg:right-[260px] rounded-full lg:top-[190px]">
    <img src="https://i.pinimg.com/originals/ff/dc/0d/ffdc0d7ad31944b2435e20f3e3aa448e.jpg" className="rounded-full" alt="" />
  </div>
  <div className="flex flex-col lg:float-right mx-5 lg:mx-40 lg:absolute right-0 top-[150px]">
  <span className="lg:mt-10 block font-medium lg:inline lg:float-right">Need help?</span>
  <span className="block font-medium lg:inline lg:float-right text-blue-500">Ask Ashbot</span>
  </div>
  <button className='absolute top-[550px] text-4xl left-20 hidden lg:inline z-10' onClick={scrollLeft}>{"<"}</button>
  <button className='absolute top-[550px] text-4xl left-[1200px] hidden lg:inline' onClick={scrollRight}>{">"}</button>
  <div id='scrollContainer' style={{ transform: `translateX(-${scrollPosition}px)` }} className={`overflow-x-hidden lg:w-[1000px] scroll flex flex-col lg:flex-row gap-20 mx-auto items-center lg:ml-32 mt-10`}>
  <div className='flex-shrink-0 h-[350px] w-[300px] lg:h-[450px] lg:w-[350px] rounded-3xl bg-black card lg:mt-20'>

</div>
<div className='h-[350px] flex-shrink-0 w-[300px] lg:h-[450px] lg:w-[350px] rounded-3xl card lg:mt-20'>

</div>
<div className='flex-shrink-0 h-[350px] w-[300px] lg:h-[450px] lg:w-[350px] rounded-3xl card lg:mt-20'>
  
</div>
  </div>
  </>)
}