'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

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

const ImageModal = ({ src, onClose }: { src: string; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      className="relative w-full max-w-4xl h-[80vh]"
      onClick={e => e.stopPropagation()}
    >
      <Image
        src={src}
        alt="Preview"
        fill
        className="object-contain"
      />
    </motion.div>
  </motion.div>
)

export default function PhotoBoard() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
  ]

  return (
    <>
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
            className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => setSelectedImage(image)}
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

      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            src={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
