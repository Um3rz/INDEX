import Image from 'next/image'
import Link from 'next/link'
import {  Linkedin, Mail } from 'lucide-react'
export default function Footer() {
  return (
    <footer className="bg-[#226A4E44] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-4">
            <Image
              src="/Index Logo White_full.png"
              alt="Company Logo"
              width={200}
              height={100}
            //   className="h-auto w-auto"
            />
          </div>

          {/* Text */}
          <p className="text-white text-center mb-6 max-w-md">
            We are the design society at LUMS!
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {/* <Link href="https://instagram.com" className="text-white hover:text-gray-200">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://facebook.com" className="text-white hover:text-gray-200">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link> */}
            <Link href="https://linkedin.com" className="text-white hover:text-gray-200">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:info@example.com" className="text-white hover:text-gray-200">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-white text-center mt-8 text-sm">
            &copy; {new Date().getFullYear()} Index. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}