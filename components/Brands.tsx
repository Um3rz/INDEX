
import Image from 'next/image'

export default function Brands() {
  const sponsors = [
    { name: 'Sponsor 1', logo: '/1.png' },
    { name: 'Sponsor 2', logo: '/2.png' },
    { name: 'Sponsor 3', logo: '/3.png' },
    { name: 'Sponsor 4', logo: '/4.png' },
    { name: 'Sponsor 5', logo: '/5.png' },
  ]

  return (
    <section className="bg-[#091711] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 font-Heading">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            We have had the privilege of working with some of the most innovative companies across various industries.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center w-full">
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                width={150}
                height={80}
                className="max-w-full h-auto object-contain rounded-lg mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}