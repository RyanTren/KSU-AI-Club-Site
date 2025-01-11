"use client";
import React, { useState, useEffect } from "react";
import { Boxes } from "./ui/background-boxes";
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

interface BackgroundBoxesDemoProps {
  words: {
    text: string;
    className?: string;
  }[];
}

export function BackgroundBoxesDemo({ words }: BackgroundBoxesDemoProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="h-screen relative w-full overflow-hidden bg-ksu-black flex flex-col items-center justify-center">
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
    </div>
  );
}
