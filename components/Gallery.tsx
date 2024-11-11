
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
  { id: 1, src: '/gallery/img (1).jpg', alt: 'Inova', gridColumn: 'span 1', gridRow: 'span 1' },
  { id: 2, src: '/gallery/img (2).jpg', alt: 'Inova', gridColumn: 'span 1', gridRow: 'span 1' },
  { id: 3, src: '/gallery/img (3).jpg', alt: 'Inova', gridColumn: 'span 1', gridRow: 'span 1'},
  { id: 4, src: '/gallery/img (4).jpg', alt: 'Inova', gridColumn: 'span 2', gridRow: 'span 1'},
  { id: 5, src: '/gallery/img (5).jpg', alt: 'LDF' ,gridColumn: 'span 1', gridRow: 'span 1' },
  { id: 6, src: '/gallery/img (6).jpg', alt: 'LDF', gridColumn: 'span 1', gridRow: 'span 2' },
  { id: 7, src: '/gallery/img (7).jpg', alt: 'LDF' ,gridColumn: 'span 1', gridRow: 'span 1'},
  { id: 8, src: '/gallery/img (8).jpg', alt: 'LDF' ,gridColumn: 'span 1', gridRow: 'span 1'},
  { id: 9, src: '/gallery/img (9).jpg', alt: 'LDF', gridColumn: 'span 1', gridRow: 'span 1' },
  { id: 10, src: '/gallery/img (10).jpg', alt: 'LDF',gridColumn: 'span 1', gridRow: 'span 2' },
  { id: 11, src: '/gallery/img (11).jpg', alt: 'LDF',gridColumn: 'span 1', gridRow: 'span 1' },
  { id: 12, src: '/gallery/img (12).jpg', alt: 'LDF',gridColumn: 'span 1', gridRow: 'span 1'},
  { id: 13, src: '/gallery/img (13).jpg', alt: 'LDF',gridColumn: 'span 1', gridRow: 'span 1' },
  { id: 14, src: '/gallery/img (14).jpg', alt: 'LDF' ,gridColumn: 'span 1', gridRow: 'span 1'},
  { id: 15, src: '/gallery/img (15).jpg', alt: 'LDF' ,gridColumn: 'span 1', gridRow: 'span 1'},
  { id: 16, src: '/gallery/img (16).jpg', alt: 'LDF', gridColumn: 'span 1', gridRow: 'span 1' },
  { id: 17, src: '/gallery/img (17).jpg', alt: 'UX Pakistan' ,gridColumn: 'span 1', gridRow: 'span 2'},
  { id: 18, src: '/gallery/img (18).jpg', alt: 'UX Pakistan' ,gridColumn: 'span 1', gridRow: 'span 1'},
  { id: 19, src: '/gallery/img (19).jpg', alt: 'UX Pakistan' ,gridColumn: 'span 1', gridRow: 'span 1'},
  { id: 20, src: '/gallery/img (20).jpg', alt: 'UX Pakistan', gridColumn: 'span 1', gridRow: 'span 1' },
]

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-3xl font-bold text-center mb-8 ">Events Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[200px] grid-flow-dense">
        {images.map(img => (
          <div
            key={img.id}
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-muted"
            style={{
              gridColumn: img.gridColumn,
              gridRow: img.gridRow,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
              className="object-cover transition-transform duration-300 hover:scale-101"
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
