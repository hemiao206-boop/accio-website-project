import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const BLOG_POSTS = [
  {
    slug: 'the-future-of-eco-luxury-2026',
    title: '2026 Trend Report: Why Minimalism is Turning Floral',
    excerpt: 'Exploring the resurgence of "Quiet Florals" and organic expressions in minimalist fashion.',
    date: 'April 27, 2026',
    image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'how-to-style-minimalist-florals',
    title: 'From Day to Dusk: Styling the Perfect Silk Slip',
    excerpt: 'A single silk slip dress is perhaps the most hardworking piece in a romantic minimalist’s wardrobe.',
    date: 'April 27, 2026',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'sustainable-romanticism-reformation-style',
    title: 'Sustainable Romanticism: The Reformation Aesthetic Decoded',
    excerpt: 'Discover why the philosophy of Reformation aligns perfectly with the modern muse.',
    date: 'April 27, 2026',
    image: 'https://images.unsplash.com/photo-1549064492-368ca3e1c66f?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'the-coralle-style-philosophy',
    title: 'The Coralle Style Philosophy: Why We Choose Romantic Minimalism',
    excerpt: 'At Coralle Style, we believe that elegance is not about being noticed, but about being remembered.',
    date: 'April 27, 2026',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background pt-32">
      <Navbar />
      <section className="px-6 max-w-7xl mx-auto pb-24">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Journal</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 italic">Musings on Style, Life & Elegance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="relative aspect-[16/10] w-full mb-6 overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-accent mb-2">{post.date}</p>
              <h2 className="text-xl font-serif mb-3 group-hover:text-accent transition-colors leading-snug">{post.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
              <div className="mt-4 inline-block text-[10px] uppercase tracking-widest border-b border-foreground pb-1">Read More</div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
