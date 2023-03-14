import React from 'react';
import {RiInstagramLine, RiFacebookCircleLine, RiTwitterLine, RiGithubLine} from 'react-icons/ri'

const Footer = () => {
  return (
    <>
        <footer className="bg-[#2E3E5C] p-8 xl:p-20">
            <section className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
                <article className="w-1/6">
                    <a href="#" className="text-2xl font-bold relative p-1 bg-[#2E3E5C] text-white">Power<span className="text-[#706FE5] text-5xl">.</span></a>
                </article>
                <article className="flex items-center gap-4">
                    <a href="" class="block text-white p-4 bg-[#706FE5] rounded-full"><RiInstagramLine/></a>
                    <a href="" class="block text-white p-4 bg-[#706FE5] rounded-full"><RiFacebookCircleLine/></a>
                    <a href="" class="block text-white p-4 bg-[#706FE5] rounded-full"><RiTwitterLine/></a>
                    <a href="" class="block text-white p-4 bg-[#706FE5] rounded-full"><RiGithubLine/></a>
                </article>   
            </section>
            <article className="mt-20">
                <p className="text-gray-300 text-center">© TobiasGuglielminotti 2023 - All Rights Reserved</p>
            </article>
        </footer>
    </>
  )
}

export default Footer