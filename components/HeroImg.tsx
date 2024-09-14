import Spline from '@splinetool/react-spline/next';

export default function HeroImg() {
   return (
     <main className="bg-[#091711]">
       <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
         <Spline
           scene="https://prod.spline.design/h2sMWjjzUTsoq2kt/scene.splinecode"
           className="w-full h-full"
         />
       </div>
     </main>
   );
}