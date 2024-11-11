
'use client'

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
    <nav className="absolute left-0 right-0 top-4 z-50 mx-auto max-w-4xl px-2 py-0">
      <div className="rounded-full bg-transparent px-4 py-2.5  md:bg-[#226A4E44] lg:bg-[#226A4E44] lg:shadow-xl ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center pl-2 ">
            <Image src="/Index_Logo_White.png" alt="Logo" width={80} height={24} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm text-white/90 transition hover:text-white">
              Home
            </Link>
            <Link href="/events" className="text-sm text-white/90 transition hover:text-white">
              Events
            </Link>
            <Link href="/ourteam" className="text-sm text-white/90 transition hover:text-white">
              Our team
            </Link>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:block">
            <Link
              href="/login"
              className="rounded-full bg-white px-6 py-2 text-sm font-medium text-black hover:bg-white/90 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="rounded-full bg-white p-2 text-black hover:bg-white/90 transition md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-4 space-y-2 md:hidden bg-[#091711] max-w-sm mx-auto rounded-lg p-4 text-center">
            <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-zinc-800">
              Home
            </Link>
            <Link href="/events" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-zinc-800">
              Events
            </Link>
            <Link href="/ourteam" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-zinc-800">
              Our team
            </Link>
            <Link
              href="/login"
              className="block rounded-md bg-white px-3 py-2 text-base font-medium text-black hover:bg-white/90 transition"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
