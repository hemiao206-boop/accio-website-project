import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export async function generateStaticParams() {
  return [
    { slug: 'the-art-of-minimalism' },
    { slug: 'sustainable-luxury' },
    { slug: 'color-palette-trends' },
  ];
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <main className="min-h-screen bg-background pt-32">
      <Navbar />
      <article className="px-6 max-w-3xl mx-auto pb-24">
        <Link href="/blog" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-foreground mb-12 inline-block">
          &larr; Back to Journal
        </Link>
        
        <header className="mb-12">
          <p className="text-[10px] uppercase tracking-widest text-accent mb-4">April 15, 2026 | Lifestyle</p>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </h1>
          <div className="aspect-[16/9] w-full bg-gray-100 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop" 
              alt="Cover" 
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="prose prose-serif max-w-none prose-stone">
          <p className="text-lg leading-relaxed text-gray-700 mb-8 italic">
            In an era of excess, the true mark of sophistication is the ability to say more with less. 
            Minimalism isn&apos;t just about white space; it&apos;s about intention.
          </p>
          <p className="text-md leading-loose text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2 className="text-2xl font-serif mt-12 mb-6">The Power of Choice</h2>
          <p className="text-md leading-loose text-gray-600 mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
