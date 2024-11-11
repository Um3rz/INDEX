import Image from 'next/image'

export default function Ec() {
  return (
    <section className="container mx-auto px-4 py-8 ">
     <h2 className="text-3xl font-bold text-center mb-8">Executive Council</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {/* First row with one centered image */}
        <div className="md:col-span-2 flex justify-center">
          <div className="aspect-square w-full md:w-1/2 overflow-hidden ">
            <Image
              src="/directorate/21.jpg"
              alt="Featured Image"
              width={360}
              height={360}
              className="w-full h-full object-cover rounded-xl drop-shadow-lg hover:scale-95 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Second row with two images */}
        <div className="aspect-square overflow-hidden">
          <Image
            src="/directorate/22.jpg"
            alt="Image 2"
            width={360}
            height={360}
            className="w-full h-full object-cover rounded-xl drop-shadow-lg hover:scale-95 transition-transform duration-300"
          />
        </div>
        <div className="aspect-square overflow-hidden">
          <Image
            src="/directorate/23.jpg"
            alt="Image 3"
            width={360}
            height={360}
            className="w-full h-full object-cover rounded-xl drop-shadow-lg hover:scale-95 transition-transform duration-300"
          />
        </div>

        {/* Third row with two images */}
        <div className="aspect-square overflow-hidden">
          <Image
            src="/directorate/24.jpg"
            alt="Image 4"
            width={360}
            height={360}
            className="w-full h-full object-cover rounded-xl drop-shadow-lg hover:scale-95 transition-transform duration-300"
          />
        </div>
        <div className="aspect-square overflow-hidden rounded-xl drop-shadow-lg">
          <Image
            src="/directorate/25.jpg"
            alt="Image 5"
            width={360}
            height={360}
            className="w-full h-full object-cover rounded-xl drop-shadow-lg hover:scale-95 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  )
}

