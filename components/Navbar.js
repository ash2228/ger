"use client"
import Link from "next/link";
import {React,useState} from "react";
import './navbar.css'

const Navbar = ()=>{
    const [nav,setNav] = useState(false);
    const navHandler = ()=>{
        setNav(!nav);
    }
    return(<>
    <nav className="lg:flex justify-center">
        <div className="p-4">
            <img src="./beer.png" alt="" className="h-[25px] inline"/>
            <div className={`float-right flex flex-col gap-2 m-2 lg:hidden absolute right-4 top-4 z-[120]`} onClick={navHandler}>
                <hr className={`border-[0.7px] border-black w-[20px] ${nav?"cross":""}`}/>
                <hr className={`border-[0.7px] border-black w-[20px] ${nav?"cross2":""}`}/>
            </div>
            </div>
            <div className={`${nav?"flex drop":"hidden"} lg:flex lg:flex-row lg:bg-transparent lg:relative lg:w-auto lg:h-auto lg:pt-0 lg:my-auto list-none z-[110] top-0 pt-20 absolute bg-[#F5F5F7] w-[100vw] h-[100vh] font-semibold text-2xl gap-3 lg:gap-10 flex-col`}>
                <Link href={"/"} className="ml-[60px] lg:ml-0 lg:font-normal lg:text-xs" onClick={navHandler}>Home</Link>
                <Link href={"https://www.kratosmort.info"} target="_blank" className="ml-[60px] lg:ml-0 lg:font-normal lg:text-xs" onClick={navHandler}>Portfolio</Link>
                <Link href={"/signup"} className="ml-[60px] lg:ml-0 lg:font-normal lg:text-xs" onClick={navHandler}>Signup</Link>
                <Link href={"/account"} className="ml-[60px] lg:ml-0 lg:font-normal lg:text-xs" onClick={navHandler}>Account</Link>
                <Link href={"/"} className="ml-[60px] lg:ml-0 lg:font-normal lg:text-xs" onClick={navHandler}>Support</Link>
                <Link href={"/"} className="ml-[60px] lg:ml-0 lg:font-normal lg:text-xs" onClick={navHandler}>History</Link>
                <Link href={"/about"} className="ml-[60px] lg:ml-0 lg:font-normal lg:text-xs" onClick={navHandler}>About</Link>
                <Link href={"/"} className="ml-[60px] lg:ml-0 lg:font-normal lg:text-xs" onClick={navHandler}>Contact</Link>
            </div>
    </nav>
    </>)    
}
export default Navbar;