import React from 'react';
import { RiCheckboxBlankCircleFill ,RiStarFill} from "react-icons/ri";

const Hero = () => {
  return (
  <>  
    <section className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-8">
      {/* Information */}
      <section className=" bg-red-500 md:col-span-5 flex items-center justify-center ">
        <article className="flex flex-col gap-9">
          <h1 className="h1-max-640px pl-8 text-7xl font-bold leading-[8rem] ">Web Desing Impactful Digital{" "} <span className="display-mayor-640px text-violet-700">Product</span>
            <span className="mobile-display  text-violet-700 ml-4 py-2 px-6 border-8 border-violet-700 relative">
              Products 
              <RiCheckboxBlankCircleFill className="mobile-display text-white text-base absolute -left-5 -top-5 p-2 bg-violet-700 rounded-full box-content"/>
              <RiCheckboxBlankCircleFill className="mobile-display text-white text-base absolute -right-5 -top-5 p-2 bg-violet-700 rounded-full box-content"/>
              <RiCheckboxBlankCircleFill className="mobile-display text-white text-base absolute -right-5 -bottom-5 p-2 bg-violet-700 rounded-full box-content"/>
              <RiCheckboxBlankCircleFill className="mobile-display text-white text-base absolute -left-5 -bottom-5 p-2 bg-violet-700 rounded-full box-content"/>
            </span>
          </h1>
          <p className="pl-8 text-gray-500 text-2xl ">Help find solutions with intitutive and in accordance with client business goals. 
          We provide high-quality services.</p>
          <div className="menor-640px-p-l">
            <button className=' bg-violet-700 text-white sm:ml-6 py-2 px-8 rounded-xl text-xl'>Contact us</button>
          </div>
        </article>
      </section>
      {/* Image */}
      <section className="bg-red-300 ajuste-640px section-img-640px  md:col-span-3 flex items-center justify-center flex-col relative">
          <img src="hero.png" alt="Joven sonrriendo haciendo señales de okey" className="img-640px sm:mt-1 w-auto h-[370px] object-cover -mt-28 ml-3"/>
          <article className="bg-white flex flex-col justify-center gap-1 w-[250px] mx-auto rounded-xl shadow-xl p-4">
            <div className="flex items center">
              <img src="https://img.freepik.com/foto-gratis/alegre-mujer-mediana-edad-cabello-rizado_1262-20859.jpg?w=740&t=st=1675293371~exp=1675293971~hmac=27510f9ab378c11b6b67e24f0b1344a1a184437fe7d192620183d0bb26b3aec2"
              className= "w-10 h-10 object-cover rounded-full ring-2 ring-gray-300"/>
              <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=740&t=st=1675299424~exp=1675300024~hmac=b52590808c1a09e86e6fc438b47bb1e0d69d744fedd95f9323928b5a8225dc77" alt="Jovencita cruzando los brazos sonriendo"
              className=" w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-2"/>
              <img src="https://img.freepik.com/psd-gratis/retrato-mujer-negocios_23-2150116801.jpg?w=740&t=st=1675299544~exp=1675300144~hmac=b4097cc896ce35578965d350dae64553a1231f763d78fe031b7ae1afd3979fdc" alt='retrato de mujer de negocios'
              className=" w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-2"/>
              <img src="https://img.freepik.com/foto-gratis/disparo-cabeza-hipster-contento-tiene-expresion-satisfecha_273609-18229.jpg?w=740&t=st=1675299648~exp=1675300248~hmac=284b11395e868a49aad358d2b9211d412810a790b387c268d2f2b2a6fd84f199S" alt="Joven sonrriendo"
              className=" w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-2"/>
            </div>
            <h2 className="text-xl font-bold text-gray-800">+ 120 Employees</h2>
            <article className="flex items-center gap-2 text-lg ">
              <RiStarFill className="text-violet-700"/> <p className="text-gray-500 text-lg ">5.0 (3.1k Reviews)</p>
            </article>
          </article>
        <div className='mobile-display absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[380px] h-[380px] text-purple-100 border-[10px] border-violet-700 rounded-full -z-10'></div>
      </section> 
    </section>
    {/* Logos
    <article className="flex item-center justify-center">
      <img src="figma-logo.png" alt="logo de figma" className="w-20 h-20 object-cover 
      rounded-full border-l-8 border-gray-600 " />
      <img src="adobe-logo.png" alt="logo de abode" className="w-20 h-20 object-cover 
      rounded-full border-l-8 border-gray-600 " />
      <img src="sketch-logo.png" alt="" className="w-20 h-20 object-cover 
      rounded-full border-l-8 border-gray-600 " />
    </article> */}
  </>
  )
}

export default Hero