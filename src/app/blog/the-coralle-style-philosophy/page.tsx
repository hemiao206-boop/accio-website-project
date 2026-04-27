import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogIntroPage() {
  return (
    <main className="min-h-screen bg-background pt-32">
      <Navbar />
      <article className="px-6 max-w-3xl mx-auto pb-24">
        <Link href="/blog" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-foreground mb-12 inline-block">
          &larr; Back to Journal
        </Link>
        
        <header className="mb-12">
          <p className="text-[10px] uppercase tracking-widest text-accent mb-4">April 27, 2026 | Philosophy</p>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            The Coralle Style Philosophy: Why We Choose Romantic Minimalism
          </h1>
          <div className="aspect-[16/9] w-full bg-gray-100 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop" 
              alt="Coralle Style Cover" 
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="prose prose-serif max-w-none prose-stone">
          <p className="text-lg leading-relaxed text-gray-700 mb-8 italic">
            At Coralle Style, we believe that elegance is not about being noticed, but about being remembered. 
            Our mission is to curate a space where fashion meets soul.
          </p>
          <p className="text-md leading-loose text-gray-600 mb-6">
            In a world of fast fashion and fleeting trends, Coralle Style stands for something different. 
            We focus on the pieces that tell a story—those that feel as good as they look. 
            Whether it&apos;s the perfect drape of a silk midi dress or the subtle glow of gold hoops, 
            every item we feature is selected with a specific aesthetic in mind: Romantic Minimalism.
          </p>
          <h2 className="text-2xl font-serif mt-12 mb-6">Curated for the Modern Muse</h2>
          <p className="text-md leading-loose text-gray-600 mb-6">
            Our readers are women who navigate the world with grace and intention. 
            They are the muses of their own lives. That&apos;s why our "Edit" isn&apos;t just about clothes; 
            it&apos;s about a lifestyle that celebrates quality, texture, and light.
          </p>
          <p className="text-md leading-loose text-gray-600 mb-6">
            As you explore our curated collections, you&apos;ll find that each link is a doorway to 
            a piece of that romantic vision. We are proud to partner with brands that share our values, 
            ensuring that your journey from inspiration to purchase is as seamless as a spring breeze.
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
