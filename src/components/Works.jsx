import React from 'react'

const Works = () => {
  return (
    <section className="p-8 max-[639px]:flex max-[639px]:flex-col ">
        <h2 className=": text-[40px] font-black">We create world-class digital products</h2>
        <p className="text-gray-500">By information about desing the world to the best instructors, heat helping by information</p>
        <article className="flex flex-col md:grid grid-cols-2 gap-5 mt-8">
            <article className="flex flex-col ">
                <img src="work1.png" className="w-full md:h-[550px] rounded-3xl mb-5"/>
                <p> App desing - February 20, 2022</p>
                <p className="text-2xl font-bold m-1">App redesing</p>
                <p>By information about desing the world to the best instructors, heat helping by information about desing the world to the best instructors, heatc helping.</p>
            </article>
            <article className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
              <div className="flex flex-col gap-2">
                <img className="rounded-3xl" src="work2.png" alt="foto de la web de Disney plus" />
                <p className="">App Design - June 20, 2022</p>
                <p className="font-bold text-xl">Redesign channel website landing page</p>
              </div>
              <div className="flex flex-col gap-2"> 
                <img className="rounded-3xl" src="work4.png" alt="" />
                <p className="">App Design - August 22, 2022</p>
                <p className="font-bold text-xl">New Locator App For a New Company</p>
              </div>
              <div className="flex flex-col gap-2">
                <img className="rounded-3xl" src="work3.png" alt="" />
                <p className="">App Design - October 19, 2022</p>
                <p className="font-bold text-xl">Rental Rooms Web App Platform</p>
              </div>
              <div className="flex flex-col gap-2">
                <img className="rounded-3xl" src="work5.png" alt="" />
                <p className="">App Design - December 23, 2022</p>
                <p className="font-bold text-xl">Calendar App for Big SASS Company</p>
              </div>
            </article>
        </article>
    </section>
  )
}

export default Works