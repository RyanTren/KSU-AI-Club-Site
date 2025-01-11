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
          quality={75}
          loading="eager"
        />
      </motion.div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
        <button
          className="bg-ksu-white/50 hover:bg-ksu-gold text-ksu-black w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          onClick={() => paginate(-1)}
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          className="bg-ksu-white/50 hover:bg-ksu-gold text-ksu-black w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          onClick={() => paginate(1)}
          aria-label="Next image"
        >
          →
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-ksu-gold' : 'bg-ksu-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
