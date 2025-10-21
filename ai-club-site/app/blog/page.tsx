import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Reactmarkdown from 'react-markdown';
import Image from 'next/image';
import PostContent from '@/components/PostContent';

interface SocialLinks {
    linkedin?: string;
    github?: string;
    twitter?: string;
    mastodon?: string;
    website?: string;
}

interface Author {
    name: string;
    email: string;
    socials: SocialLinks;
    imageUrl?: string;
    bio: string;
}

const author: Author = {
    name: 'Nicholi Caron',
    email: 'nicholicaron@gmail.com',
    imageUrl: '/assets/nicholi-caron.jpg',
    bio: 'Driven by the thought of architecting the digital infrastructure of the future. Lately he has delved into compressed sensing, computer vision, multi-agent coordination, ML compilers, and resource constrained deployment of AI models!',
    socials: {
        linkedin: 'https://www.linkedin.com/in/nicholicaron',
        github: 'https://github.com/nicholicaron',
        twitter: 'https://twitter.com/nicholicaron',
        mastodon: 'https://discuss.systems/@nicholi',
        website: 'https://www.nicholi.me/',
    },
};

interface BlogPost {
    title: string;
    author: string;
    date: string;
    excerpt: string;
    url: string;
}

interface UnifiedBlogPost {
    id?: string;
    title: string;
    date: string;
    author?: string;
    excerpt: string;
    url?: string;
}

const blogPosts: BlogPost[] = [
    {
        title: 'Autodifferentiation',
        author: 'Nicholi Caron',
        date: '2023-07-16',
        excerpt:
            'We build autodifferentiation (AD) from the ground up. Having a deep understanding of AD is essential for deep learning research.',
        url: 'https://www.nicholi.me/autodiff/',
    },
    {
        title: 'Convoluted Computation',
        author: 'Nicholi Caron',
        date: '2023-07-15',
        excerpt:
            'A dive into computer vision via Convolutional Neural Networks and how the Winograd Convolution is implemented',
        url: 'https://www.nicholi.me/convolutions/',
    },
    {
        title: 'Understanding Deep Learning Solutions',
        author: 'Nicholi Caron',
        date: '2024-01-03',
        excerpt:
            'My attempt at an unofficial, comprehensive solution set for the book "Understanding Deep Learning"',
        url: 'https://www.nicholi.me/udl-solutions-unofficial/',
    },
    {
        title: 'Other stuff from Nicholi!',
        author: 'Nicholi Caron',
        date: '',
        excerpt:
            'Consists of his projects, AI blog posts, books, and random thoughts!',
        url: 'https://www.nicholi.me/topics-2/',
    },
];

const AuthorCard = ({ author }: { author: Author }) => (
    <div className="bg-ksu-dark-gray rounded-xl shadow-2xl p-8 mb-12 border border-ksu-gray">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
            <div className="w-32 h-32 relative flex-shrink-0">
                {author.imageUrl ? (
                    <Image
                        src={author.imageUrl}
                        alt={author.name}
                        fill
                        className="rounded-full object-cover border-4 border-ksu-gold shadow-md"
                    />
                ) : (
                    <div className="w-full h-full rounded-full bg-ksu-gray flex items-center justify-center border-4 border-ksu-gold">
                        <span className="text-4xl font-bold text-ksu-gold">
                            {author.name[0]}
                        </span>
                    </div>
                )}
            </div>
            <div className="flex-1 text-center sm:text-left">
                <h2 className="text-3xl font-bold mb-2 text-ksu-gold">
                    {author.name}
                </h2>
                <p className="text-ksu-white opacity-80 mb-4 leading-relaxed">
                    {author.bio}
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                    <a
                        href={`mailto:${author.email}`}
                        className="text-ksu-gold hover:text-ksu-white hover:underline transition-colors duration-300 font-medium"
                    >
                        {author.email}
                    </a>
                    {Object.entries(author.socials).map(([platform, url]) => (
                        <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ksu-gold hover:text-ksu-white hover:underline transition-colors duration-300 font-medium capitalize"
                        >
                            {platform}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default async function Blog() {
    const postsDirectory = path.join(process.cwd(), 'posts');
    let fileNames: string[] = [];

    try{
        const fileNames = fs.readdirSync(postsDirectory);
    } catch{
        console.warn("No local blog posts directory found. Skipping markdown posts.");
    }
    

    const markdownPosts: UnifiedBlogPost[] = fileNames
        .map((fileName) => {
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            return {
                id: fileName.replace(/\.md$/, ''),
                title: data.title,
                date: data.date,
                author: data.author,
                excerpt: data.excerpt || content.slice(0, 150) + '...',
            };
        })
        .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

    const allPosts: UnifiedBlogPost[] = [...markdownPosts, ...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <main className="min-h-screen pt-20 pb-16 bg-ksu-black text-ksu-white">
            <section className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-5xl font-extrabold text-center mb-12 text-ksu-gold drop-shadow-lg">
                    KSU AI Club Blog
                </h1>
                <AuthorCard author={author} />
                <div className="space-y-6">
                    {allPosts.map((post) => (
                        <Link
                            href={post.url || `/blog/${post.id}`}
                            key={post.id}
                            target={post.url ? '_blank' : undefined}
                            rel={post.url ? 'noopener noreferrer' : undefined}
                            className="block transform hover:scale-[1.02] transition-transform duration-300"
                        >
                            <article className="bg-ksu-dark-gray rounded-xl shadow-lg p-6 border border-ksu-gray">
                                <h2 className="text-2xl font-bold mb-2 text-ksu-gold">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-ksu-white opacity-70 mb-3">
                                    {post.author} • {post.date}
                                </p>
                                <PostContent content={post.excerpt} />
                                {/*
                                {post.url ? (
                                    <p className="mt-4 text-ksu-white opacity-90 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                ) : (
                                    <Reactmarkdown className="mt-4 text-ksu-white opacity-90 leading-relaxed">
                                        {post.excerpt}
                                    </Reactmarkdown>
                                )}
                                */}
                            </article>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
