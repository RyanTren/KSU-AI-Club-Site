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

  return (
    <main className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="h-screen relative">
        <BackgroundBoxesDemo words={words} />
        
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