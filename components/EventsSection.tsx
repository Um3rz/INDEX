import Image from 'next/image'

export default function Component() {
  return (
    <section className="bg-[#091711] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Our Events</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <EventCard
            logo="/placeholder.svg?height=50&width=150"
            title="LAHORE DESIGN FESTIVAL"
            description="LDF is the first design festival in Pakistan that highlights the importance of multidisciplinary design in a local context. Launched in 2021, the festival consists of three major events and welcomes local designers, thinkers, activists, and practitioners from diverse backgrounds to create an engaging and informative experience."
          />
          <EventCard
            logo="/placeholder.svg?height=50&width=150"
            title="INOVA"
            description="Inova is a beginner-friendly design challenge for O and A-level students. It encourages innovative design thinking with an emphasis on logo design, and product design and equips young minds with distinguished problem-solving skills in the face of new emerging user problems."
          />
        </div>
      </div>
    </section>
  )
}

function EventCard({ logo, title, description }:any) {
  return (
    <div className="bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 bg-gray-200 transform rotate-45 translate-x-8 -translate-y-8"></div>
      <div className="p-6 pb-12">
        <Image
          src={logo}
          alt={`${title} logo`}
          width={150}
          height={50}
          className="mb-4"
        />
        <h3 className="text-2xl font-bold text-[#5FD6A9] mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
      <Image
        src="/placeholder.svg?height=50&width=50"
        alt="Index logo"
        width={50}
        height={50}
        className="absolute bottom-4 right-4"
      />
    </div>
  )
}