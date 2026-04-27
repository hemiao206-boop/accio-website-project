import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ArticleTwoPage() {
  return (
    <main className="min-h-screen bg-background pt-32">
      <Navbar />
      <article className="px-6 max-w-3xl mx-auto pb-24">
        <Link href="/blog" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-foreground mb-12 inline-block">
          &larr; Back to Journal
        </Link>
        
        <header className="mb-12">
          <p className="text-[10px] uppercase tracking-widest text-accent mb-4">April 27, 2026 | Styling Guide</p>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            From Day to Dusk: Styling the Perfect Silk Slip
          </h1>
          <div className="aspect-[16/9] w-full bg-gray-100 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1200&auto=format&fit=crop" 
              alt="Silk Slip Dress Styling" 
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="prose prose-serif max-w-none prose-stone">
          <p className="text-lg leading-relaxed text-gray-700 mb-8 italic">
            A single silk slip dress is perhaps the most hardworking piece in a romantic minimalist's wardrobe.
          </p>
          <p className="text-md leading-loose text-gray-600 mb-6">
            The beauty of the silk slip lies in its versatility. For a casual afternoon at a gallery, we recommend layering it over a crisp white tee and finishing with vintage-inspired leather mules. It's "off-duty model" meets "Parisian chic."
          </p>
          <h2 className="text-2xl font-serif mt-12 mb-6">The Evening Transition</h2>
          <p className="text-md leading-loose text-gray-600 mb-6">
            As the sun sets, shed the layers. Let the silk speak for itself. Add a pair of gold-toned hoops and a swept-back hairstyle. The Coralle Style approach is always: less is more, but make the "less" extraordinary.
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
