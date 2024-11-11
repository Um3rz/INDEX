'use client'
import Directorate from "@/components/Directorate";
import Ec from "@/components/Ec";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function OurTeam () {
    return <div className="bg-[#091711]">
        <Navbar/> 
        <div className="bg-[#226A4E44]"><Ec/></div>
        <Directorate/>
        <Footer/>
    </div>;
}