import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-40 pb-20">
        <h1 className="text-4xl font-serif tracking-widest uppercase mb-12">About Coralle Style</h1>
        <div className="prose prose-sm max-w-none text-gray-600 leading-loose space-y-6">
          <p>
            Welcome to Coralle Style, a curated destination for the modern woman who seeks elegance in every facet of life. 
            Founded on the principles of timelessness, quality, and conscious consumption, our mission is to redefine luxury 
            through a lens of simplicity and intentionality.
          </p>
          <p>
            In a world of fast-paced trends, we advocate for the "Quiet Luxury"—pieces that tell a story, materials that 
            last a lifetime, and a lifestyle that prioritizes well-being and aesthetic harmony.
          </p>
          <p>
            Whether it's the perfect cashmere sweater, a sustainable silk dress, or musings on art and travel, 
            Coralle Style is here to inspire your journey towards a more refined and purposeful existence.
          </p>
          <div className="pt-8 border-t border-accent/20">
            <p className="font-serif italic text-lg">"Elegance is not standing out, but being remembered."</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
