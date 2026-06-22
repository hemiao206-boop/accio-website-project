import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <header className="mb-16 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Welcome to Coralle Style</h1>
          <p className="text-accent uppercase tracking-[0.2em] text-sm md:text-base italic">
            Discover Your Dream Dress, Curated Just for You.
          </p>
        </header>

        <section className="space-y-10 leading-relaxed text-lg md:text-xl font-light">
          <p className="animate-fade-in delay-100">
            At <span className="font-medium">Coralle Style</span>, we don’t design dresses—we dedicate ourselves to discovering them. 
            Born from a personal love for dresses and a passion for sharing beautiful finds, this is your trusted guide 
            to a world of feminine elegance.
          </p>

          <p className="animate-fade-in delay-200">
            Think of us as your most style-savvy friend, who tirelessly scouts the best of the web to bring you 
            a curated collection of dresses that celebrate the female form. We seek out pieces that are effortlessly elegant, 
            softly flattering, and designed to make you feel confident and beautiful for any occasion.
          </p>

          <div className="py-12 border-y border-accent/20 animate-fade-in delay-300">
            <h2 className="text-2xl font-serif mb-6 uppercase tracking-widest text-accent">Our Curated Aesthetic</h2>
            <p>
              Our selection is guided by a singular, luminous vision. Here, you’ll find <span className="italic">no black or grey</span>. 
              Our carefully chosen assortment blooms in a palette of soft joy: think creamy ivory, whisper-soft pinks, 
              and romantic reds. We are drawn to delicate florals, graceful stripes, and charming gingham checks—patterns 
              that speak of lightness and grace.
            </p>
          </div>

          <div className="animate-fade-in delay-400">
            <h2 className="text-2xl font-serif mb-6 uppercase tracking-widest text-accent">Why Coralle Style?</h2>
            <p className="mb-6">
              In a sea of endless options, we save you time and elevate your search. Every dress featured here is more 
              than just a product; it’s a recommendation from a like-minded enthusiast. We connect you directly 
              to a variety of wonderful brands that share our appreciation for timeless, feminine design.
            </p>
            <p>
              Our vision is simple: to find those who, like us, believe that style should be luminous, joyful, and deeply personal. 
              If you’ve ever wished for a personal shopper who shares your love for light, elegant dresses, 
              you’ve found your community.
            </p>
          </div>

          <footer className="pt-10 text-center animate-fade-in delay-500">
            <p className="mb-8 font-serif italic text-2xl text-accent">
              Explore our latest edits, find inspiration, and discover the perfect dress that feels like it was chosen just for you.
            </p>
            <p className="uppercase tracking-[0.3em] text-sm font-medium">
              Welcome to Coralle Style—where curation meets passion.
            </p>
          </footer>
        </section>
      </div>

      <Footer />
    </main>
  );
}
