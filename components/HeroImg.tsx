// import Spline from '@splinetool/react-spline/next';
// export default function HeroImg() {
//   return (
//     <main className="bg-[#091711]">
//       <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
//       <Spline
//         scene="https://prod.spline.design/h2sMWjjzUTsoq2kt/scene.splinecode" 
//       />
//     </div>
//   </main>
// );
// }

'use client'

import { useEffect, useRef } from 'react'

export default function HeroImg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Particle effect
    class Particle {
      x: number
      y: number
      radius: number
      speedX: number
      speedY: number
      
      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.radius = Math.random() * 2
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = '#fff'
        ctx.fill()
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0 || this.x > window.innerWidth) this.speedX *= -1
        if (this.y < 0 || this.y > window.innerHeight) this.speedY *= -1

        this.draw()
      }
    }

    // Create particles
    const particles: Particle[] = []
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
      ))
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 77, 64, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => particle.update())
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#091711]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.5 }}
      />
      <div className="relative z-10 flex min-h-screen items-center justify-center top-10 bottom-10 ">
        <div className="flex h-[80vmin] w-[80vmin] items-center justify-center rounded-full bg-[#004d40]/90 shadow-2xl backdrop-blur-sm">
          <div className="max-w-[80%] text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              We are the{' '}
              <span className="font-serif italic">design</span>
              <br />
              society at Lums
            </h1>
            <p className="text-sm mb-8 tracking-widest text-white/90 sm:text-sm">
              INNOVATE . DESIGN . EXPERIENCE
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}