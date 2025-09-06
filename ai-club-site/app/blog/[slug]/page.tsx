import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostContent from '@/components/PostContent';

export default function Post({ params }: { params: { slug: string } }) {
    const fullPath = path.join(process.cwd(), 'posts', `${params.slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return (
        <main className="min-h-screen pt-20 pb-16 bg-ksu-gold">
            <article className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
                <p className="text-gray-600 mb-8">
                    {data.author} • {data.date}
                </p>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <PostContent content={content} />
                </div>
            </article>
        </main>
    );
}
