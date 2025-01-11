'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const images = [
  '/assets/classroom-photo.jpg',
  '/assets/group-photo.jpg'
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length)
  }

  return (
    <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden bg-ksu-black">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute w-full h-full"
      >
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      <button
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-ksu-white/50 p-2 rounded-full hover:bg-ksu-gold"
        onClick={() => paginate(-1)}
      >
        ←
      </button>
      <button
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-ksu-white/50 p-2 rounded-full hover:bg-ksu-gold"
        onClick={() => paginate(1)}
      >
        →
      </button>
    </div>
  )
}
