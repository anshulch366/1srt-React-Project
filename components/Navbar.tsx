"use client"
import logo from "@/public/img/logo.svg";
import Navul from "./Navul";
import Navbtn from "./Navbtn";
import { Menu } from "lucide-react";
import { useState } from "react";


export default function Navbar() {
    const [show,setshow]=useState(false)
    

    const hamBurgar =()=>{
        setshow(!show)
    }
    return (

        <nav className="Nav-1st h-[100px] bg-white w-full flex justify-center items-center ">

            <div className="  w-[1200px] flex justify-between items-center ">

                <div className="nav-2nd flex justify-between w-[660px] max-[800px]:w-[90%] items-center">


                    <div className="logo">
                        <img src={logo.src} alt="logo" />
                    </div>

                   <div className="block max-[800px]:hidden">
                    <Navul/>
                   </div>

                    {show &&<Navul />}



                </div>

                <Navbtn />
                <div className="w-[100px] flex justify-start">

                <Menu className="text-black hidden max-[800px]:block" onClick={hamBurgar} />
                </div>


            </div>






        </nav>
    );
}




