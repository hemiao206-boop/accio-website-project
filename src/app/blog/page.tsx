import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-background pt-32">
      <Navbar />
      <section className="px-6 max-w-7xl mx-auto pb-24">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Journal</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 italic">Musings on Style, Life & Elegance</p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post: any) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="relative aspect-[16/10] w-full mb-6 overflow-hidden bg-gray-100 rounded-sm">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">No Image</div>
                  )}
                </div>
                <p className="text-[10px] uppercase tracking-widest text-accent mb-2">{post.date}</p>
                <h2 className="text-xl font-serif mb-3 group-hover:text-accent transition-colors leading-snug">{post.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 inline-block text-[10px] uppercase tracking-widest border-b border-foreground pb-1">Read More</div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <p>No articles found. Start publishing through the CMS!</p>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
