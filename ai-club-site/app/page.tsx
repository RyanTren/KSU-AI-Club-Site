'use client';

import { BackgroundBoxesDemo } from '@/components/background-boxes-demo';
import Gallery from '@/components/Gallery';
import PhotoBoard from '@/components/PhotoBoard';
import Header from '@/components/Header';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

import { Boxes } from '@/components/ui/background-boxes';
import Image from 'next/image';
import Link from 'next/link';

import { TypewriterEffect } from '@/components/ui/typewriter-effect';

export default function Home() {
    const words = [
        {
            text: 'Exploring',
            className: 'text-ksu-white dark:text-ksu-white',
        },
        {
            text: 'the',
            className: 'text-ksu-white dark:text-ksu-white',
        },
        {
            text: 'future',
            className: 'text-ksu-white dark:text-ksu-white',
        },
        {
            text: 'of',
            className: 'text-ksu-white dark:text-ksu-white',
        },
        {
            text: 'Artificial',
            className: 'text-ksu-gold dark:text-ksu-gold',
        },
        {
            text: 'Intelligence',
            className: 'text-ksu-gold dark:text-ksu-gold',
        },
    ];

    const handleScrollToAbout = () => {
        document
            .getElementById('about')
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <main className="min-h-screen">
            <Header />
            {/* Hero Section */}
            <section className="h-screen relative w-full overflow-hidden bg-ksu-black flex flex-col items-center justify-center">
                <Image
                    src="/assets/hero-background.gif"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-10"
                    style={{ filter: 'brightness(0.5)' }}
                />

                {/* Circular Gradient Overlay */}
                <div className="absolute inset-0 z-20 bg-gradient-radial from-transparent via-ksu-gray to-ksu-black opacity-70"></div>

                <div className="relative z-30 flex flex-col items-center p-4 sm:p-0">
                    <motion.div
                        className="relative w-48 h-48 sm:w-64 sm:h-64 mb-4"
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
                        className="text-4xl sm:text-5xl font-extrabold text-ksu-white mb-4 text-center leading-tight"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        KSU AI Club
                    </motion.h1>

                    <div className="my-6 text-center">
                        <TypewriterEffect words={words} />
                    </div>

                    <motion.div
                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <button
                            onClick={handleScrollToAbout}
                            className="w-full sm:w-auto bg-ksu-gold text-ksu-black px-8 py-3 rounded-full font-semibold hover:bg-ksu-white hover:text-ksu-black transition-all duration-300 hover:shadow-lg text-lg"
                        >
                            Discover More
                        </button>
                        <Link
                            href="/blog"
                            className="w-full sm:w-auto bg-transparent text-ksu-white border-2 border-ksu-white px-8 py-3 rounded-full font-semibold hover:bg-ksu-white hover:text-ksu-black hover:border-ksu-white transition-all duration-300 hover:shadow-lg text-lg flex items-center justify-center"
                        >
                            Explore Our Blog
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
            <section
                id="about"
                className="py-20 px-4 bg-ksu-black relative min-h-screen flex items-center justify-center overflow-hidden"
            >
                <Boxes className="absolute inset-0 z-0 flex items-center justify-center w-full h-full" />
                <div className="max-w-4xl mx-auto relative z-10 bg-ksu-black bg-opacity-70 p-8 rounded-lg shadow-xl border border-ksu-gray">
                    <h2 className="text-4xl font-extrabold mb-8 text-center text-ksu-gold">
                        About Us
                    </h2>
                    <p className="text-lg sm:text-xl text-ksu-white text-center leading-relaxed">
                        At the KSU AI Club, we are a vibrant community of
                        students passionate about Artificial Intelligence. We
                        come together to explore, learn, and innovate in the
                        rapidly evolving world of AI. Through hands-on projects,
                        engaging workshops, insightful discussions, and
                        collaborative events, we aim to demystify AI, make it
                        accessible, and empower our members to build the future.
                        Join us to connect with like-minded individuals, expand
                        your knowledge, and contribute to exciting AI
                        initiatives!
                    </p>
                </div>
            </section>

            <Gallery />

            <section className="py-20 px-4 bg-ksu-black">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center text-ksu-white">
                        AI Hackathon 2024 Highlights
                    </h2>
                    <PhotoBoard />
                </div>
            </section>
        </main>
    );
}
