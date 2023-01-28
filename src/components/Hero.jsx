import React from 'react';
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-12">
        <div className="flex flex-col gap-9">
          <h1 className="text-7xl font-bold leading-[8rem] ">Web Desing Impactful Digital{" "}
            <span className="text-violet-700 ml-4 py-2 px-6 border-8 border-violet-700 relative">
              Products
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-violet-700 rounded-full box-content"/>
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-violet-700 rounded-full box-content"/>
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-violet-700 rounded-full box-content"/>
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-violet-700 rounded-full box-content"/>
            </span>
          </h1>
          <p className="text-gray-500 text-2xl ">Help find solutions with intitutive and in accordance with client business goals. We provide high-quality services.</p>
          <div>
            <button className='bg-violet-700 text-white  py-2 px-8 rounded-xl text-xl'>Contact us</button>
          </div>
        </div>
      </div>
      {/* Image */}
      <section className="md:col-span-3 flex items-center justify-center relative">
          <img src="hero.png" alt="Joven sonrriendo haciendo señales de okey" className="w-[450px] h-[450px] object-cover -mt-28"/>
          <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[380px] h-[380px] text-purple-100 border-[10px] border-violet-700 rounded-full -z-10'></div>
      </section>
    </section>
  )
}

export default Hero