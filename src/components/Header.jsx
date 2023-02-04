import React, { useState } from 'react'
import { RiCheckboxBlankCircleLine, RiMenu3Fill, RiCloseLine } from "react-icons/ri";


const Header = () => {
  const [showMenu,setShowMenu] = useState(false);
  return (
    <header className=" w-full flex justify-around ">
        <section className="xl:w-1/6 text-center p-2 -mt-4">
            <a href="#" className="text-2xl font-bold relative p-1 bg-white">
                Power
                <span className="text-violet-700 text-5xl">.</span>{" "}
                <RiCheckboxBlankCircleLine className="absolute -left-3 bottom-1  bg-violet-700 -z-10 rounded-2xl "/>
            </a>
        </section>
        
        <nav className={`fixed bg-white w-[60%] md:w-[70%]  xl:w-[full] h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static 
        flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50` }>
            <a href="" className="">Home</a>
            <a href="" className="">About Us</a>
            <a href="" className="">Services</a>
            <a href="" className="">Products</a>
        </nav>
        <button onClick={() => setShowMenu(!showMenu)} className="sm:flex justify-end items-center xl:hidden text-2xl ">
          {showMenu ? <RiCloseLine/> : <RiMenu3Fill/>}
        </button>
    </header>
  )
}
//HEADER{*flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50*}
// MENU p-20
// NAV
export default Header