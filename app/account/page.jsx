"use client";
import "@/app/account/style.css";
import { getSession, signOut, useSession } from "next-auth/react";
import { React, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const { data: session } = useSession();
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [login,setLogin] = useState(false)
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (session && session.user) {
        setName(session.user.name);
        setImage(session.user.image);
        setLogin(true);
      }
      
    };
  
    fetchData();
  }, [session]);
  

  return login?(
    <>
    <div className="w-[100vw]">
        <h1 className="inline font-bold ml-5">Daru ID</h1>
        <div class="Btn float-right inline" onClick={()=>{signOut()}}>
  <div class="sign">
    <svg viewBox="0 0 512 512">
      <path
        d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
      ></path>
    </svg>
  </div>

  <div class="text">Logout</div>
</div>

        <hr />
    </div>
      <div class="card21 m-auto lg:ml-6 mt-5">
        <img src={image} alt="" className="rounded-xl" />
        <p className="invisible">Powered By</p>
        <p>{name}</p>
      </div>
    </>
  ):(
    <>
    <h1 className="m-auto text-center mt-56">Please Login first</h1>
    <h1 className="m-auto text-center mt-5 bg-slate-500 p-5 py-2 w-[200px] text-white" onClick={()=>{router.push("/signup")}}>Login</h1>
    </>
  )
}

export default Page;
