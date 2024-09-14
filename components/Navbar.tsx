
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-[#091711]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src="/Index_Logo_White.png" alt="Logo" width={100} height={10} />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#" className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="#" className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Events</Link>
              <Link href="#" className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Our team</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-black hover:bg-gray-950 text-white px-4 py-2 rounded-md text-sm font-medium">
              Contact Us
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium text-center">Home</Link>
            <Link href="#" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium text-center">Events</Link>
            <Link href="#" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium text-center">Our team</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-[#5FD6A9]">
            <button className="bg-black hover:bg-gray-950 text-white px-10 py-3 rounded-lg text-sm font-medium mx-auto block ">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}