import Image from 'next/image';
import React from 'react';
import { FlipWordsDemo } from '@/components/flip-words-demo';

interface LeaderProps {
    name: string;
    title: string;
    email: string;
    bio: string;
    imageUrl?: string;
    linkedinUrl?: string;
}

const LeaderCard = ({
    name,
    title,
    email,
    bio,
    imageUrl,
    linkedinUrl,
}: LeaderProps) => (
    <div className="flex flex-col items-center p-6 bg-ksu-dark-gray rounded-xl shadow-2xl border border-ksu-gray transform hover:scale-105 hover:border-ksu-gold transition-all duration-300 text-center h-full">
        <div className="w-28 h-28 relative mb-4">
            {imageUrl ? (
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="rounded-full object-cover border-4 border-ksu-gold shadow-md"
                />
            ) : (
                <div className="w-full h-full rounded-full bg-ksu-gray flex items-center justify-center border-4 border-ksu-gold">
                    <span className="text-4xl font-bold text-ksu-gold">
                        {name[0]}
                    </span>
                </div>
            )}
        </div>
        <h3 className="text-2xl font-bold mb-1 text-ksu-gold">{name}</h3>
        <h4 className="text-lg text-ksu-white opacity-80 mb-3">{title}</h4>
        <p className="text-ksu-white opacity-70 text-sm leading-relaxed mb-4 flex-grow">
            {bio}
        </p>
        <div className="flex flex-col space-y-2 mt-auto w-full">
            <a
                href={`mailto:${email}`}
                className="text-ksu-gold hover:text-ksu-white hover:underline transition-colors duration-300 font-medium text-sm"
            >
                {email}
            </a>
            {linkedinUrl && (
                <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ksu-gold hover:text-ksu-white hover:underline transition-colors duration-300 font-medium text-sm"
                >
                    LinkedIn Profile
                </a>
            )}
        </div>
    </div>
);

const leaders = [
    {
        name: 'Branden Chen',
        title: 'President',
        email: 'bchen9@students.kennesaw.edu',
        bio: 'Hi everyone. My name is Branden Chen, and currently I am a senior at KSU, pursuing a major in CS and a minor in Math. My hobbies include playing badminton, video games, and learning more about data science and ml. Currently, I am doing research involving pretraining medical segmentation models and multi-party encryption on activation functions such as ReLU. I hope to see everyone in our meetings!.',
        imageUrl: '/assets/president.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/branden-chen-/',
    },
    {
        name: 'Mikita Slabysh',
        title: 'Vice President',
        email: 'mslabysh@students.kennesaw.edu',
        bio: 'Hello! My name is Mikita Slabysh, and I’m a senior pursuing a computer science degree. My main areas of expertise are web and game development, and in the field of AI, I focus on computer vision. I currently teach children how to code, and in my free time, I enjoy playing chess, working out, and skateboarding. I’m looking forward to making new comrades in the club this semester!',
        imageUrl: '/assets/vice-president.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/mikitaslabysh/',
    },
    {
        name: 'Sanjay Ravikumar',
        title: 'Treasurer',
        email: 'sraviku1@students.kennesaw.edu',
        bio: "Hey Everyone! My name is Sanjay and I am a second year CS major! I am involved in AI/ML research specifically with adversarial attacks and defense mechanisms and also with image classification/detection. Outside of class I love editing in my free time, watching anime, and doom scrolling on TikTok. A fun fact about me is that I used to move states so much I had to continue studying 4th grade in 3 different schools! I'm so excited to be your treasurer for this semester!",
        imageUrl: '/assets/treasurer.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/sanjaykravikumar/',
    },
    {
        name: 'Ryan Howington',
        title: 'Media Manager',
        email: 'rhowing4@students.kennesaw.edu',
        bio: "Hello! I'm pursuing a Masters in Computer Science at KSU with an Artificial Intelligence concentration. I'm interested in all facets of AI, but am especially in intersection of AI and philosophy, cybersecurity, and social organization. I also enjoy playing video games, hiking, and powerlifting. I'm thrilled to be your media manager for this semester, and I can't wait to meet you!",
        imageUrl: '/assets/media-manager.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/ryan-howington-29933364/',
    },
];

export default function About() {
    return (
        <main className="min-h-screen pt-20 pb-16 bg-ksu-black text-ksu-white">
            <section className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-5xl font-extrabold text-center mb-6 text-ksu-gold drop-shadow-lg">
                    Our Visionary Leadership
                </h1>
                <p className="text-xl text-center mb-16 max-w-3xl mx-auto leading-relaxed opacity-90">
                    Meet the dedicated individuals who drive the KSU AI Club
                    forward. Their passion and expertise guide our community in
                    exploring the frontiers of Artificial Intelligence.
                </p>
                <div className="text-xl text-center mb-12 text-ksu-white">
                    <FlipWordsDemo />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {leaders.map((leader) => (
                        <LeaderCard key={leader.email} {...leader} />
                    ))}
                </div>
            </section>
        </main>
    );
}
