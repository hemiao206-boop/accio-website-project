import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ArticleThreePage() {
  return (
    <main className="min-h-screen bg-background pt-32">
      <Navbar />
      <article className="px-6 max-w-3xl mx-auto pb-24">
        <Link href="/blog" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-foreground mb-12 inline-block">
          &larr; Back to Journal
        </Link>
        
        <header className="mb-12">
          <p className="text-[10px] uppercase tracking-widest text-accent mb-4">April 27, 2026 | Trend Report</p>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            2026 Trend Report: Why Minimalism is Turning Floral
          </h1>
          <div className="aspect-[16/9] w-full bg-gray-100 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1200&auto=format&fit=crop" 
              alt="2026 Fashion Trends" 
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="prose prose-serif max-w-none prose-stone">
          <p className="text-lg leading-relaxed text-gray-700 mb-8 italic">
            For seasons, minimalism meant stark lines and monochrome palettes. In 2026, the mood is shifting toward a softer, more organic expression.
          </p>
          <p className="text-md leading-loose text-gray-600 mb-6">
            We're seeing a resurgence of "Quiet Florals"—prints that don't shout, but rather bloom subtly against neutral backdrops. It's the natural evolution of the minimalist movement, moving away from clinical coldness toward a more human, romantic warmth.
          </p>
          <h2 className="text-2xl font-serif mt-12 mb-6">The Palette of the Future</h2>
          <p className="text-md leading-loose text-gray-600 mb-6">
            Think sage greens, dusty roses, and of course, the signature coral tones that define our aesthetic. These colors paired with eco-conscious fabrics create a look that is as sustainable as it is stunning.
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
