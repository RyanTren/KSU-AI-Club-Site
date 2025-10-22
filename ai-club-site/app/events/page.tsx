'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-ksu-black text-ksu-white">
            <Header />
            <main className="container mx-auto py-20 px-4 pt-32">
                <h1 className="text-5xl font-extrabold text-center text-ksu-gold mb-12">
                    Upcoming Events
                </h1>

                <section className="bg-ksu-black rounded-xl shadow-2xl p-8 mb-16 border border-ksu-gold transform hover:scale-[1.01] transition-all duration-300 ease-in-out">
                    <h2 className="text-5xl font-extrabold text-center text-ksu-gold mb-8 tracking-wide">
                        KSU AI Hackathon 2025
                    </h2>
                    <div className="flex justify-center mb-8">
                        <Image
                            src="/assets/ai-hackathon-image.png"
                            alt="KSU Hack-A-Thon 2025"
                            width={700}
                            height={400}
                            objectFit="contain"
                            className="rounded-lg shadow-xl border border-ksu-white/20"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center mb-8">
                        <div className="bg-ksu-black p-5 rounded-lg shadow-lg border border-ksu-gold/50">
                            <p className="text-xl font-bold text-ksu-gold mb-2">
                                Opening Day
                            </p>
                            <p className="text-xl text-ksu-white mb-1">
                                11/17 6:30pm - 11pm
                            </p>
                            <p className="text-lg text-ksu-white">
                                Q202(ETC Auditorium)
                            </p>
                        </div>
                        <div className="bg-ksu-black p-5 rounded-lg shadow-lg border border-ksu-gold/50">
                            <p className="text-xl font-bold text-ksu-gold mb-2">
                                Judging Day
                            </p>
                            <p className="text-xl text-ksu-white mb-1">
                                11/21 1:30pm - 4:30pm
                            </p>
                            <p className="text-lg text-ksu-white">
                                Q202(ETC Auditorium)
                            </p>
                        </div>
                    </div>
                    <p className="text-5xl font-extrabold text-ksu-gold mb-10 text-center">
                        Prize Pool: $1000+
                    </p>
                </section>
                <section className="text-center mt-16 p-6 bg-ksu-gray/20 rounded-xl shadow-inner border border-ksu-white/10">
                    <h2 className="text-3xl font-extrabold text-ksu-white mb-5 tracking-wide">
                        Rules
                    </h2>
                    <p className="text-xl text-ksu-white leading-relaxed max-w-3xl mx-auto">
                        Projects must be completed within the hackathon period
                    </p>
                    <p className="text-xl text-ksu-white leading-relaxed max-w-3xl mx-auto">
                        All projects must utilize AI in some capacity
                    </p>
                    <p className="text-xl text-ksu-white leading-relaxed max-w-3xl mx-auto">
                        Must be a KSU student to participate
                    </p>
                    <p className="text-xl text-ksu-white leading-relaxed max-w-3xl mx-auto">
                        4 person team maximum
                    </p>
                </section>

                <section className="text-center mt-16 p-6 bg-ksu-gray/20 rounded-xl shadow-inner border border-ksu-white/10">
                    <h2 className="text-3xl font-extrabold text-ksu-white mb-5 tracking-wide">
                        Stay Tuned for More Events!
                    </h2>
                    <p className="text-xl text-ksu-white leading-relaxed max-w-3xl mx-auto">
                        We're always planning exciting new workshops, speaker
                        sessions, and social events. Follow us on social media
                        and check back here for updates!
                    </p>
                </section>
            </main>
        </div>
    );
}
