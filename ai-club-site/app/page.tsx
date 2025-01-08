'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Gallery from '@/components/Gallery'
import PhotoBoard from '@/components/PhotoBoard'

export default function Home() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-ksu-white bg-gradient-to-r from-ksu-black to-ksu-gold overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0.1 
              }}
              animate={{
                y: [null, "-100%"],
                opacity: [0.1, 0.5, 0.1]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="z-10 px-4">
          <motion.div 
            className="relative w-64 h-64 mx-auto mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/assets/logo.png"
              alt="AI Club Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <motion.h2 
            className="text-3xl mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            AI Club at Kennesaw State University
          </motion.h2>

          <motion.p 
            className="text-xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Exploring the future of Artificial Intelligence
          </motion.p>

          <motion.div 
            className="space-x-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={scrollToAbout}
              className="bg-ksu-white text-ksu-black px-6 py-2 rounded-full font-semibold hover:bg-ksu-gold hover:text-ksu-white transition-all duration-300 hover:shadow-lg"
            >
              Learn More
            </button>
            <Link href="/blog" 
              className="bg-transparent border-2 border-ksu-white px-6 py-2 rounded-full font-semibold hover:bg-ksu-gold hover:text-ksu-white hover:border-ksu-gold transition-all duration-300 hover:shadow-lg"
            >
              Read Our Blog
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={scrollToAbout}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-ksu-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-ksu-black">About Us</h2>
          <p className="text-lg text-ksu-black text-center">
            At the AI Club, we bring together curious minds and innovators to explore 
            the endless possibilities of Artificial Intelligence. Join our events, 
            workshops, and discussions as we dive into the future of technology!
          </p>
        </div>
      </section>

      <Gallery />

      <section className="py-20 px-4 bg-ksu-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-ksu-white">AI Hackathon 2024 Highlights</h2>
          <PhotoBoard />
        </div>
      </section>
    </main>
  )
}