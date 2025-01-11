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

    </div>
  );
}
