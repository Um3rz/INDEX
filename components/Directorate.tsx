import Image from 'next/image'

export default function Directorate() {
  // Generate an array of 20 image placeholders
  let i=0;
  const images = Array.from({ length: 20 }, (_, i) => `/directorate/${i + 1}.png`)

  return (
    <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold text-center mb-8">Directorate</h2>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 drop-shadow-md">
        {images.map((src, index) => (
          <div key={index} className="aspect-square overflow-hidden">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={1080}
              height={1080}
              className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}