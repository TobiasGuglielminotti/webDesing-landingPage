import React, { useState } from 'react'
import { RiCheckboxBlankCircleLine, RiMenu3Fill, RiCloseLine } from "react-icons/ri";


const Header = () => {
  const [showMenu,setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
        <section className="xl:w-1/6 text-center p-2 -mt-4">
            <a href="#" className="text-2xl font-bold relative p-1 bg-white">
                Power
                <span className="text-violet-700 text-5xl">.</span>{" "}
                <RiCheckboxBlankCircleLine className="absolute -left-3 bottom-1  bg-violet-700 -z-10 rounded-2xl"/>
            </a>
        </section>
        
        <nav className={`fixed bg-white w-[80%] md:w-[40%] xl:w-[full] h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static 
        flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500` }>
            <a href="" className="">Home</a>
            <a href="" className="">About Us</a>
            <a href="" className="">Services</a>
            <a href="" className="">Products</a>
        </nav>
        <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden text-2xl p-20">
          {showMenu ? <RiCloseLine/> : <RiMenu3Fill/>}
        </button>
    </header>
  )
}

export default Header