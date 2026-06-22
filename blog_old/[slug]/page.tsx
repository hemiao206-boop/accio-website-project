import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getPost } from '@/lib/notion';
import { notFound } from 'next/navigation';

export const revalidate = 60; // Revalidate every minute

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pt-32">
      <Navbar />
      <article className="px-6 max-w-3xl mx-auto pb-24">
        <Link href="/blog" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-foreground mb-12 inline-block">
          &larr; Back to Journal
        </Link>
        
        <header className="mb-12">
          <p className="text-[10px] uppercase tracking-widest text-accent mb-4">
            {post.date} | {post.category || 'Journal'}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            {post.title}
          </h1>
          {post.image && (
            <div className="aspect-[16/9] w-full bg-gray-100 mb-12 overflow-hidden rounded-sm">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </header>

        <div className="prose prose-serif max-w-none prose-stone prose-img:rounded-sm prose-headings:font-serif leading-loose">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
      <Footer />
    </main>
  );
}
