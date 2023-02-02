import React from 'react';
import { RiCheckboxBlankCircleFill ,RiStarFill} from "react-icons/ri";

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
      <section className="md:col-span-3 flex items-center justify-center flex-col relative">
          <img src="hero.png" alt="Joven sonrriendo haciendo señales de okey" className="w-[450px] h-[450px] object-cover -mt-28 ml-3"/>
          <article className="bg-white flex flex-col justify-center gap-1 w-[250px] mx-auto rounded-xl shadow-xl p-4">
            <div className="flex items center">
              <img src="https://img.freepik.com/foto-gratis/alegre-mujer-mediana-edad-cabello-rizado_1262-20859.jpg?w=740&t=st=1675293371~exp=1675293971~hmac=27510f9ab378c11b6b67e24f0b1344a1a184437fe7d192620183d0bb26b3aec2"
              className="bg-white w-10 h-10 object-contain rounded-full ring-2 ring-gray-300"/>
              <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=740&t=st=1675299424~exp=1675300024~hmac=b52590808c1a09e86e6fc438b47bb1e0d69d744fedd95f9323928b5a8225dc77" alt="Jovencita cruzando los brazos sonriendo"
              className="bg-white w-10 h-10 object-contain rounded-full ring-2 ring-gray-300 -ml-2"/>
              <img src="https://img.freepik.com/psd-gratis/retrato-mujer-negocios_23-2150116801.jpg?w=740&t=st=1675299544~exp=1675300144~hmac=b4097cc896ce35578965d350dae64553a1231f763d78fe031b7ae1afd3979fdc" alt='retrato de mujer de negocios'
              className="bg-white w-10 h-10 object-contain rounded-full ring-2 ring-gray-300 -ml-2"/>
              <img src="https://img.freepik.com/foto-gratis/disparo-cabeza-hipster-contento-tiene-expresion-satisfecha_273609-18229.jpg?w=740&t=st=1675299648~exp=1675300248~hmac=284b11395e868a49aad358d2b9211d412810a790b387c268d2f2b2a6fd84f199" alt="Joven sonrriendo"
              className="bg-white w-10 h-10 object-contain rounded-full ring-2 ring-gray-300 -ml-2"/>
            </div>
            
            <h2 className="text-xl font-bold text-gray-800">+ 120 Employees</h2>
            <div className="flex items-center gap-2 text-lg ">
              <RiStarFill className="text-violet-700"/> <p className="text-gray-500 text-lg ">5.0 (3.1k Reviews)</p>
            </div>
          </article>
        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[380px] h-[380px] text-purple-100 border-[10px] border-violet-700 rounded-full -z-10'></div>
        
      </section>
      {/* <div className="bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center max-w-[250px] mx-auto">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffoto-gratis%2Fempresaria-confiada-sonriente-que-presenta-brazos-cruzados_5546285.htm&psig=AOvVaw3VS-l5LKd0t7nQ62ompfki&ust=1675211285053000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOjk5r3G8PwCFQAAAAAdAAAAABAE" alt="empresaria confiada sonriente que presenta brazos cruzados" className="w-10 h-10 object-contain rounded-full"/>
          </div> */}
    </section>
  )
}

export default Hero