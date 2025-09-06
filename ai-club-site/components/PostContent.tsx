import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import Image from 'next/image';

export default function PostContent({ content }: { content: string }) {
    return (
        <div className="prose prose-xl max-w-none">
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    h1: ({ children }) => (
                        <h1 className="text-4xl font-bold mt-8 mb-4">
                            {children}
                        </h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-3xl font-bold mt-8 mb-4">
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="text-2xl font-bold mt-8 mb-4">
                            {children}
                        </h3>
                    ),
                    ul: ({ children }) => (
                        <ul className="list-disc list-inside space-y-1 my-4">
                            {children}
                        </ul>
                    ),
                    li: ({ children }) => <li>{children}</li>,
                    img: ({ src, alt }) => (
                        <div className="relative w-full h-[400px] my-8">
                            <Image
                                src={src || ''}
                                alt={alt || ''}
                                fill
                                style={{ objectFit: 'contain' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
