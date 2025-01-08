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
    <div className="relative h-[500px] w-full overflow-hidden bg-ksu-black">
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
          className="object-cover"
        />
      </motion.div>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-ksu-white/50 p-2 rounded-full hover:bg-ksu-gold"
        onClick={() => paginate(-1)}
      >
        ←
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-ksu-white/50 p-2 rounded-full hover:bg-ksu-gold"
        onClick={() => paginate(1)}
      >
        →
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-ksu-gold' : 'bg-ksu-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
