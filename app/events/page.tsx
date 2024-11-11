'use client'
import Footer from "@/components/Footer"
import Gallery from "@/components/Gallery"
import Navbar from "@/components/Navbar"

export default function EventPage()
{
    return (    
        <div className="bg-[#091711]">
               <Navbar/>
               <Gallery/>
               <Footer/>
        </div>
    )
}