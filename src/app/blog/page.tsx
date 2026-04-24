import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const BLOG_POSTS = [
  {
    slug: 'the-art-of-minimalism',
    title: 'The Art of Minimalism in Spring 2026',
    excerpt: 'Discover how to curate a wardrobe that speaks volumes with just a few key pieces.',
    date: 'April 15, 2026',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'sustainable-luxury',
    title: 'Sustainable Luxury: A New Standard',
    excerpt: 'Why the future of high fashion lies in ethical production and conscious consumption.',
    date: 'April 10, 2026',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'color-palette-trends',
    title: 'Trends: Romantic Neutral Palettes',
    excerpt: 'Exploring the soft beiges and muted pinks dominating the runways this season.',
    date: 'April 05, 2026',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop',
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
