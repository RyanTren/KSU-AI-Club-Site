interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Exploring Large Language Models",
    date: "2024-03-15",
    excerpt: "A deep dive into the architecture and capabilities of modern LLMs like GPT-4 and Claude.",
    url: "https://www.nicholi.me/tag/ai/llm-exploration"
  },
  {
    title: "The Future of AI in Healthcare",
    date: "2024-02-28",
    excerpt: "How artificial intelligence is revolutionizing medical diagnosis and treatment planning.",
    url: "https://www.nicholi.me/tag/ai/healthcare-future"
  },
  // Add more blog posts here
];

export default function Blog() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <section className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">AI Club Blog</h1>
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
