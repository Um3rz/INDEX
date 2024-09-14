import Image from "next/image"

export default function Brands() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#226a4e44] relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Radial gradient for a subtle spotlight effect */}
      <div className="absolute inset-0 bg-black bg-opacity-60 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We have had the privilege of working with some of the most innovative companies across various industries.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center mt-8 md:mt-12 lg:mt-16">
          {[
            '/google.png',
            '/meta.png',
            '/notion.png',
            '/systems.png',
            '/s&p.png',
          ].map((src, i) => (
            <div key={i} className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-lg p-4 flex items-center justify-center transition-all duration-300 hover:bg-opacity-10 hover:scale-105 border border-gray-700">
              <Image
                src={src}
                alt={`Brand logo ${i + 1}`}
                width={280}
                height={80}
                className="max-w-full h-auto object-contain filter invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}