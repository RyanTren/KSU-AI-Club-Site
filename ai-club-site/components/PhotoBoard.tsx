'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function PhotoBoard() {
  // Replace with your actual hackathon image paths
  const hackathonImages = [
    '/assets/ai-hackathon-1.jpg',
    '/assets/ai-hackathon-2.jpg',
    '/assets/ai-hackathon-3.jpg',
    '/assets/ai-hackathon-4.jpg',
    '/assets/ai-hackathon-5.jpg',
    '/assets/ai-hackathon-6.jpg',
    '/assets/ai-hackathon-7.jpg',
    '/assets/ai-hackathon-8.jpg',
    '/assets/ai-hackathon-9.jpg',
    '/assets/ai-hackathon-10.jpg',
    // Add more images here
  ]

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4"
    >
      {hackathonImages.map((image, index) => (
        <motion.div
          key={index}
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src={image}
            alt={`Hackathon photo ${index + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
