import React from 'react'
import {RiSmartphoneFill, RiMacFill} from "react-icons/ri"
export default function Servicies () {
  return (
    <>
        <section id="servicies" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20">
            <article className="flex flex-col gap-4">
                <h3 className="text-[40px] font-bold">How we can help you</h3>
                <p className="text-[20px]text-gray-500">Follow our newsletter. We will regulary update our latest project and availability.</p>
                <form className="w-full">
                    <div className="relative">
                        <input type="text" className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none" placeholder="Enter your email address"/>
                        <button type="submit" className="absolute font-semibold py-2 px-6 bg-[#706FE5] text-white rounded-xl top-1/2 -translate-y-1/2 right-2">Suscribe</button>
                    </div>
                </form>
            </article>
            <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                    <RiSmartphoneFill className="text-4xl p-2 bg-[#EAEAFC] text-[#706FE5] box-content rounded-xl"/>
                    <p className="text-[20px] font-bold">UI/UX Design</p>
                    <p className="text-gray-500">Sometimes features require a short description</p>
                </div>
                <div className="flex flex-col gap 2">
                    <RiMacFill className="text-4xl p-2 bg-[#EAEAFC] text-[#706FE5] box-content rounded-xl"/>
                    <p className="text-[20px] font-bold">Logo Branding</p>
                    <p className="text-gray-500">Sometimes features require a short description</p>
                </div>
                <div className="flex flex-col gap 2">
                    <RiSmartphoneFill className="text-4xl p-2 bg-[#EAEAFC] text-[#706FE5] box-content rounded-xl"/>
                    <p className="text-[20px] font-bold">App Design</p>
                    <p className="text-gray-500">Sometimes features require a short description</p>
                </div>
                <div className="flex flex-col gap 2">
                    <RiMacFill className="text-4xl p-2 bg-[#EAEAFC] text-[#706FE5] box-content rounded-xl"/>
                    <p className="text-[20px] font-bold">Webiste Design</p>
                    <p className="text-gray-500">Sometimes features require a short description</p>
                </div>
            </article>
        </section>
    </>
  )
}
