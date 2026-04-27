import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ArticleOnePage() {
  return (
    <main className="min-h-screen bg-background pt-32">
      <Navbar />
      <article className="px-6 max-w-3xl mx-auto pb-24">
        <Link href="/blog" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-foreground mb-12 inline-block">
          &larr; Back to Journal
        </Link>
        
        <header className="mb-12">
          <p className="text-[10px] uppercase tracking-widest text-accent mb-4">April 27, 2026 | Brand Study</p>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            Sustainable Romanticism: The Reformation Aesthetic Decoded
          </h1>
          <div className="aspect-[16/9] w-full bg-gray-100 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1549064492-368ca3e1c66f?q=80&w=1200&auto=format&fit=crop" 
              alt="Sustainable Fashion" 
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="prose prose-serif max-w-none prose-stone">
          <p className="text-lg leading-relaxed text-gray-700 mb-8 italic">
            In the intersection of conscious living and effortless allure lies the "Reformation Style"—a visual language that has redefined modern femininity.
          </p>
          <p className="text-md leading-loose text-gray-600 mb-6">
            At Coralle Style, we've long admired the philosophy that a dress can be both breathtaking and kind to the earth. The Reformation aesthetic isn't just about the clothes; it's about the silhouette of a woman who knows her worth and her impact. It's characterized by high slits, sweetheart necklines, and fabrics that drape like a second skin.
          </p>
          <h2 className="text-2xl font-serif mt-12 mb-6">The Secret to the Perfect Fit</h2>
          <p className="text-md leading-loose text-gray-600 mb-6">
            What makes this style so addictive? It's the balance of structure and fluidity. By using low-impact materials like Tencel™ and deadstock fabrics, the aesthetic proves that luxury doesn't have to be loud. It can be a quiet, romantic whisper.
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
