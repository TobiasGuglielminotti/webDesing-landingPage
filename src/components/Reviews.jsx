import React from 'react'
import {RiDoubleQuotesL, RiDoubleQuotesR} from "react-icons/ri";

const Reviews = () => {
  return (
    <>
      <section className="p-8 flex flex-col gap-8 bg-gray-100">
        <h3 className="text-[40px] text-center font-black">Let’s hear What they says</h3>
        <article className="flex justify-center gap-4">
          <span><RiDoubleQuotesL className="text-5xl text-[#706FE5]"/></span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestias facilis ratione impedit deserunt corrupti nihil culpa dolore. Voluptatem expedita similique a debitis in cumque eaque voluptatum perspiciatis, quo illum!</p>
          <span><RiDoubleQuotesR className="text-5xl text-[#706FE5]"/></span>
        </article>
        <article className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center justify-center gap-8 md:gap-12">
            <img src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg" alt="empresaria-confiada-sonriente-que-presenta-brazos-cruzados" className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full" />
            <img src="https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg" alt="hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos" className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full" />
            <img src="https://img.freepik.com/foto-gratis/hombre-negocios-dueno-empresa-oficina_1303-15851.jpg" alt="hombre-negocios-dueno-empresa-oficina" className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-[#706FE5] p-1 bg-white" />
            <img src="https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg" alt="" className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full" />
            <img src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg" alt="joven-feliz" className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full" />
          </div>
        </article>
        <article>
          <h3 class="text-center text-[24px] font-bold">Ricky Aprilia</h3>
          <h5 class="text-center text-[20px] text-gray-500">Founder of Varibo</h5>
        </article>
      </section>
    </>
  )
}

export default Reviews