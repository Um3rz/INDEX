'use client'
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroImg from "@/components/HeroImg";
import Carousel from "@/components/Carousel";
import Brands from "@/components/Brands";
export default function Home() {
  return <div className="bg-[#091711]">
    <Navbar/>
    <HeroImg/>
    <section className="bg-[#091711] dark:bg-[#091711]">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-0 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-[#5FD6A9] text-center">Our Mission</h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-white text-center">To teach, encourage and celebrate design innovation, design thinking and user based problem solving by hosting tutrials, workshops , seminars and networking opportunities. To connect designers at LUMS and around the country to brew culture of sharong design knowledge </p>
           
        </div>
        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex justify-center items-center">
            <Image src="/ourmission.png" alt="mockup" width={400} height={380}/>
        </div>                
    </div>
</section>
<section className="bg-[#226A4E44] dark:bg-[#226a4e44]">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        
        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex justify-center items-center">
            <Image src="/ourvision.png" alt="mockup" width={400} height={300}/>
        </div>  
        <div className="mr-auto place-self-center lg:col-span-6">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-[#5FD6A9] text-center">Our Vision</h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-white">INDEX aims to become the primary outlet to students both undergraduate and graduate at LUMS and the entirety of Pakistan who wish to refine and showcase their skills of implementing design choices and providing design solutions to real world problems. </p>
           
        </div>              
    </div>
</section>
<Brands/>
  </div>
  
  
}