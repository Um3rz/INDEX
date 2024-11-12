'use client'
import Footer from "@/components/Footer"
import Gallery from "@/components/Gallery"
import Navbar from "@/components/Navbar"
import Image from "next/image"

export default function EventPage()
{
    return (    
        <div className="bg-[#091711]">
            <Navbar/>
            <ImageGridSection/>
            <Gallery/>
            <Footer/>
        </div>
    )
}

function ImageGridSection() {
return (
    <section className="container mx-auto px-4 py-16">
    <h2 className="text-center text-3xl font-bold mb-12 pt-20">Our Events</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
        <a href="https://www.instagram.com/inovalums/">
        <Image
            src="/inova (2).png"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-110"
            
          />
          </a>
        </div>
        <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
            <a href="https://www.instagram.com/lahoredesignfestival/">
          <Image
            src="/ldf.png"
            alt="Image 2"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-110"
          />
          </a>
        </div>
        <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
            <a href="https://www.instagram.com/uxpakistan/">
          <Image
            src="/ux.png"
            alt="Image 3"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-110"
          />
          </a>
        </div>
      </div>
    </section>
  )
}
