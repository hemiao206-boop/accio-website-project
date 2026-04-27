import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SpringCapsulePage() {
  return (
    <main className="min-h-screen bg-background pt-32">
      <Navbar />
      <article className="px-6 max-w-3xl mx-auto pb-24">
        <Link href="/blog" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-foreground mb-12 inline-block">
          &larr; Back to Journal
        </Link>
        
        <header className="mb-12">
          <p className="text-[10px] uppercase tracking-widest text-accent mb-4">April 27, 2026 | Style Guide</p>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            The 2026 Spring Capsule Wardrobe: 7 Essentials for Effortless Chic
          </h1>
          <div className="aspect-[16/9] w-full bg-gray-100 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop" 
              alt="Spring Capsule Wardrobe" 
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="prose prose-serif max-w-none prose-stone">
          <p className="text-lg leading-relaxed text-gray-700 mb-8 italic">
            Building a capsule wardrobe is the ultimate exercise in romantic minimalism. It's about finding pieces that work together to create a symphony of style.
          </p>
          <p className="text-md leading-loose text-gray-600 mb-6">
            As we step into Spring 2026, the focus shifts to breathable fabrics, muted palettes, and silhouettes that move with you. Here are the 7 pieces we're currently obsessing over at Coralle Style.
          </p>
          
          <h2 className="text-2xl font-serif mt-12 mb-6">1. The Oversized Linen Blazer</h2>
          <p className="text-md leading-loose text-gray-600 mb-6">
            A staple for transitional weather. Look for shades of oatmeal or soft sand. It adds structure to a romantic silk slip dress while keeping the vibe relaxed.
          </p>

          <h2 className="text-2xl font-serif mt-12 mb-6">2. The Silk Midi Dress</h2>
          <p className="text-md leading-loose text-gray-600 mb-6">
            The cornerstone of our brand aesthetic. A well-cut silk midi dress in a neutral tone can go from a morning coffee run (paired with sneakers) to an evening gala (with gold hoops).
          </p>

          <p className="text-md leading-loose text-gray-600 mb-6">
            Stay tuned as we reveal the full edit in our upcoming social media series. Remember, true style isn't about the quantity of your clothes, but the quality of your choices.
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
