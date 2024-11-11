import Image from 'next/image'

export default function Component() {
  return (
    <section className="bg-[#091711] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-5xl xl:text-6xl font-extrabold text-center text-white mb-12 ">Our Events</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <EventCard
            logo="/Index_Logo_White.png"
            logo2="/ldf.jpeg"
            title="LAHORE DESIGN FESTIVAL"
            description="LDF is the first design festival in Pakistan that highlights the importance of multidisciplinary design 
            in a local context. Launched in 2021, the festival consists of three major events and welcomes local designers, thinkers, activists,
            and practitioners from diverse backgrounds to create an engaging and informative experience."
            gradient="#000000"
          />

          <EventCard
            logo="/Index_Logo_White.png"
            logo2='/inova.png'
            title="INOVA"
            description="Inova is a beginner-friendly design challenge for O and A-level students. It encourages 
            innovative design thinking with an emphasis on logo design, and product design and equips young minds with
            distinguished problem-solving skills in the face of new emerging user problems."
            gradient="#071939"
          />
        </div>
      </div>
    </section>
  )
}

function EventCard({ logo,logo2, title, description,gradient}: { logo: string; logo2:string,title: string; description: string,gradient:string}) {
  return (
    <div
    style={{ background: gradient}}
    className="relative overflow-hidden rounded-md hover:scale-95 transition-transform duration-300"
  >
      <div className="p-6 pb-12 ">
        <Image
          src={logo}
          alt={`${title} logo`}
          width={75}
          height={35}
          className="mb-4"
        />
        <h3 className="text-2xl font-bold text-[#5FD6A9] mb-2 font-Heading">{title}</h3>
        <p className="text-white font-body">{description}</p>
      </div>
      <Image
        src={logo2}
        alt="Index logo"
        width={50}
        height={50}
        className="absolute bottom-4 right-4"
      />
    </div>
  )
}