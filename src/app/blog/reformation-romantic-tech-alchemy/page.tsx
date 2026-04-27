import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function ReformationArticlePage() {
  return (
    <main className="min-h-screen bg-background pt-32">
      <Navbar />
      <article className="px-6 max-w-2xl mx-auto pb-24">
        <Link href="/blog" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-foreground mb-12 inline-block">
          &larr; Back to Journal
        </Link>
        
        <header className="mb-16 text-center">
          <p className="text-[10px] uppercase tracking-widest text-accent mb-4">April 27, 2026 | Deep Dive</p>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            Reformation: The Mad Alchemy of Romance and Technology
          </h1>
          <div className="relative aspect-[3/4] w-full bg-gray-100 mb-6 overflow-hidden rounded-sm">
            <img 
              src="https://sc02.alicdn.com/kf/Aef1b20b5ef554a4492757870d11e67a4m.png" 
              alt="Reformation Romantic Floral" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[10px] uppercase tracking-widest text-gray-400 italic">The quintessential Reformation floral — romantic, effortless, and earth-friendly.</p>
        </header>

        <div className="prose prose-serif max-w-none prose-stone">
          <h2 className="text-2xl font-serif mb-6 text-center border-b border-accent/20 pb-4">01. More Than Clothes, It’s a Revolution</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8 first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3">
            In the heart of sunny Los Angeles, Reformation did something radical: they stuffed a vintage soul into a high-tech brain. They aren&apos;t just selling dresses; they are defining "effortless elegance" for a generation that demands both beauty and accountability.
          </p>
          <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-gray-600 my-12 bg-accent/5">
            &quot;We don&apos;t just want you to look good, we want you to feel good about what you&apos;re wearing.&quot;
          </blockquote>

          <h2 className="text-2xl font-serif mt-20 mb-6 text-center border-b border-accent/20 pb-4">02. The &quot;Magic&quot; Behind the Wardrobe</h2>
          <p className="text-md leading-loose text-gray-600 mb-12">
            Why is shopping at Reformation so addictive? Because they understand a woman&apos;s need for both indulgence and efficiency. Their brick-and-mortar stores aren&apos;t just boutiques; they are interactive labs.
          </p>
          
          <div className="my-12">
            <img 
              src="https://sc02.alicdn.com/kf/A044fdbba24a14ad0a977fca42dbb1356R.png" 
              alt="Reformation Magic Wardrobe" 
              className="w-full h-auto rounded-sm shadow-sm" 
            />
            <p className="text-center text-[10px] uppercase tracking-widest text-gray-400 mt-4 italic">Inside the tech-forward Reformation showroom.</p>
          </div>

          <ul className="space-y-6 list-none pl-0 my-12">
            <li className="flex items-start">
              <span className="text-accent mr-4 font-bold">✦</span>
              <p className="text-md text-gray-600 m-0"><strong>Magic Wardrobes:</strong> No cluttered racks. Just screens. Tap the styles you like, and they &quot;magically&quot; appear in your fitting room from hidden portals.</p>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-4 font-bold">✦</span>
              <p className="text-md text-gray-600 m-0"><strong>The Bra-Friendly Filter:</strong> A small but revolutionary detail. They know real-life struggles, offering specific categories for those who refuse to sacrifice comfort for style.</p>
            </li>
          </ul>

          <h2 className="text-2xl font-serif mt-20 mb-6 text-center border-b border-accent/20 pb-4">03. &quot;RefScale&quot;: Transparency as Luxury</h2>
          <p className="text-md leading-loose text-gray-600 mb-12">
            Reformation’s most &quot;hardcore&quot; feature is its honesty. Every product page features the **RefScale**, exposing the unseen footprint of every garment.
          </p>

          <div className="my-12 bg-gray-50 p-6 rounded-sm">
            <img 
              src="https://sc02.alicdn.com/kf/A9f82834cad204db3a00b68a9bbf03fb0c.png" 
              alt="RefScale Sustainability Chart" 
              className="w-full h-auto" 
            />
            <p className="text-center text-[10px] uppercase tracking-widest text-gray-400 mt-4 italic">The RefScale: Measuring water, waste, and carbon footprints.</p>
          </div>

          <p className="text-md leading-loose text-gray-600 mb-12">
            By slips into their silk midis, you aren&apos;t just choosing a silhouette; you are choosing a gentler future for the planet. Transparency is no longer a buzzword; it’s the new standard of sophistication.
          </p>

          <h2 className="text-2xl font-serif mt-20 mb-6 text-center border-b border-accent/20 pb-4">04. The Coralle Edit: Must-Haves</h2>
          <p className="text-md leading-loose text-gray-600 mb-12">
            This spring, we’ve curated three essential pieces that capture the heart of the romantic minimalist movement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div className="text-center">
              <img src="https://sc02.alicdn.com/kf/A5816c98868784293a3a1696a8e186dc0B.png" alt="Silk Slip" className="aspect-[3/4] object-cover rounded-sm mb-4" />
              <p className="text-xs uppercase tracking-widest font-bold">The Silk Slip</p>
              <p className="text-[10px] text-gray-400 uppercase italic">Timeless, versatile, eternal.</p>
            </div>
            <div className="text-center">
              <img src="https://sc02.alicdn.com/kf/A99718a1d2237434b9520055d2dcf4a67S.png" alt="Linen Blazer" className="aspect-[3/4] object-cover rounded-sm mb-4" />
              <p className="text-xs uppercase tracking-widest font-bold">The Linen Blazer</p>
              <p className="text-[10px] text-gray-400 uppercase italic">Structure meets sustainability.</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 mt-20 text-center italic font-serif">
            &quot;True style isn&apos;t about being noticed, it&apos;s about being remembered.&quot;
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
