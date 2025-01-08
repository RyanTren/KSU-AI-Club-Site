import Image from 'next/image';

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

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  url: string;
}

const author: Author = {
  name: "Nicholi Caron",
  email: "nicholicaron@gmail.com",
  imageUrl: "/assets/nicholi-caron.jpg",
  bio: "Driven by the thought of architecting the digital infrastructure of the future. Lately he has delved into compressed sensing, computer vision, multi-agent coordination, ML compilers, and resource constrained deployment of AI models!",
  socials: {
    linkedin: "https://www.linkedin.com/in/nicholicaron",
    github: "https://github.com/nicholicaron",
    twitter: "https://twitter.com/nicholicaron",
    mastodon: "https://discuss.systems/@nicholi",
    website: "https://www.nicholi.me/"
  }
};

const blogPosts: BlogPost[] = [
  {
    title: "Autodifferentiation",
    date: "2023-07-16",
    excerpt: "We build autodifferentiation (AD) from the ground up. Having a deep understanding of AD is essential for deep learning research.",
    url: "https://www.nicholi.me/autodiff/"
  },
  {
    title: "Convoluted Computation",
    date: "2023-07-15",
    excerpt: "A dive into computer vision via Convolutional Neural Networks and how the Winograd Convolution is implemented",
    url: "https://www.nicholi.me/convolutions/"
  },
  {
    title: "Understanding Deep Learning Solutions",
    date: "2024-01-03",
    excerpt: "My attempt at an unofficial, comprehensive solution set for the book \"Understanding Deep Learning\"",
    url: "https://www.nicholi.me/udl-solutions-unofficial/"
  },
  {
    title: "Other stuff from Nicholi!",
    date: "",
    excerpt: "Consists of his projects, AI blog posts, books, and random thoughts!",
    url: "https://www.nicholi.me/topics-2/"
  }
];

const AuthorCard = ({ author }: { author: Author }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
    <div className="flex items-center space-x-6">
      <div className="w-32 h-32 relative flex-shrink-0">
        {author.imageUrl ? (
          <Image
            src={author.imageUrl}
            alt={author.name}
            fill
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-4xl text-gray-400">{author.name[0]}</span>
          </div>
        )}
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">{author.name}</h2>
        <p className="text-gray-600 mb-4">{author.bio}</p>
        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${author.email}`} className="text-blue-600 hover:underline">
            {author.email}
          </a>
          {Object.entries(author.socials).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline capitalize"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function Blog() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <section className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">AI Club Blog</h1>
        <AuthorCard author={author} />
        <div className="grid gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-2">
                <a 
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {post.title}
                </a>
              </h2>
              <p className="text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-700">{post.excerpt}</p>
              <a 
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
