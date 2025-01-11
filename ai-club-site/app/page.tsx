'use client'

import { BackgroundBoxesDemo } from "@/components/background-boxes-demo"
import Gallery from '@/components/Gallery'
import PhotoBoard from '@/components/PhotoBoard'
import Header from '@/components/Header'

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { Boxes } from "@/components/ui/background-boxes";
import Image from 'next/image'
import Link from 'next/link'

import { TypewriterEffect } from "@/components/ui/typewriter-effect"

export default function Home() {
  const words = [
    {
      text: "Exploring",
      className: "text-ksu-white dark:text-ksu-white"
    },
    {
      text: "the",
      className: "text-ksu-white dark:text-ksu-white"
    },
    {
      text: "future",
      className: "text-ksu-white dark:text-ksu-white"
    },
    {
      text: "of",
      className: "text-ksu-white dark:text-ksu-white"
    },
    {
      text: "Artificial",
      className: "text-ksu-gold dark:text-ksu-gold"
    },
    {
      text: "Intelligence",
      className: "text-ksu-gold dark:text-ksu-gold",
    },
  ];

  const handleScrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="h-screen relative w-full overflow-hidden bg-ksu-black flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-ksu-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes className="border-ksu-gold" />

        <div className="relative z-30 flex flex-col items-center">
          <motion.div 
            className="relative w-64 h-64 mb-4"
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

          <motion.h1 
            className="text-5xl font-bold text-ksu-white mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            AI Club at KSU
          </motion.h1>

          <div className="my-6">
            <TypewriterEffect words={words} />
          </div>

          <motion.div 
            className="space-x-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={handleScrollToAbout}
              className="bg-ksu-white text-ksu-black px-6 py-2 rounded-full font-semibold hover:bg-ksu-gold hover:text-ksu-white transition-all duration-300 hover:shadow-lg"
            >
              Learn More
            </button>
            <Link href="/blog" 
              className="bg-transparent text-ksu-white border-2 border-ksu-white px-6 py-2 rounded-full font-semibold hover:bg-ksu-gold hover:text-ksu-white hover:border-ksu-gold transition-all duration-300 hover:shadow-lg"
            >
              Read Our Blog
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer z-40"
          animate={{ y: [0, 2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={handleScrollToAbout}
        >
          <div className="w-6 h-10 border-2 border-ksu-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-ksu-white rounded-full mt-2" />
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