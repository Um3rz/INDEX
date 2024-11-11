'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageData {
  id: number
  src: string
  alt: string
  gridColumn?: string
  gridRow?: string
  priority?: boolean
}

const images: ImageData[] = [
  { 
    id: 1, 
    src: '/gallery/img (1).jpg', 
    alt: 'Portrait shot',
    gridColumn: '1',
    gridRow: '1',
    priority: true
  },
  { 
    id: 2, 
    src: '/gallery/img (2).jpg', 
    alt: 'Close-up portrait',
    gridColumn: '1',
    gridRow: '2 / span 2',
    priority: true
  },
  { 
    id: 3, 
    src: '/gallery/img (3).jpg', 
    alt: 'Full length photo',
    gridColumn: '2',
    gridRow: '1 / span 2',
    priority: true
  },
  { 
    id: 4, 
    src: '/gallery/img (4).jpg', 
    alt: 'Detail shot',
    gridColumn: '2',
    gridRow: '3',
    priority: true
  },
  { 
    id: 5, 
    src: '/gallery/img (5).jpg', 
    alt: 'Fashion shot',
    gridColumn: '3',
    gridRow: '1 / span 3',
    priority: true
  },
  
]

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Events Gallery</h2>
      <div className="grid grid-cols-3 gap-4 auto-rows-[minmax(100px,auto)]">
        {images.map(img => (
          <div
            key={img.id}
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-muted"
            style={{
              gridColumn: img.gridColumn,
              gridRow: img.gridRow,
              minHeight: '200px'
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority={img.priority}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm">{img.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}