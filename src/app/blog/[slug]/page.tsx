import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { data, content } = post;

  return (
    <main className="min-h-screen bg-background pt-32">
      <Navbar />
      <article className="px-6 max-w-3xl mx-auto pb-24">
        <Link href="/blog" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-foreground mb-12 inline-block">
          &larr; Back to Journal
        </Link>
        
        <header className="mb-12">
          <p className="text-[10px] uppercase tracking-widest text-accent mb-4">
            {data.date} | {data.category || 'Journal'}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            {data.title}
          </h1>
          {data.image && (
            <div className="aspect-[16/9] w-full bg-gray-100 mb-12 overflow-hidden rounded-sm">
              <img 
                src={data.image} 
                alt={data.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </header>

        <div className="prose prose-serif max-w-none prose-stone prose-img:rounded-sm prose-headings:font-serif leading-loose">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
      <Footer />
    </main>
  );
}
