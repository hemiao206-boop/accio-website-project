export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-accent/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-serif tracking-widest uppercase mb-6">Elegance</h2>
          <p className="text-sm text-gray-500 max-w-sm leading-loose">
            Curated fashion for the modern woman who values timeless style and quality craftsmanship.
          </p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-6 font-bold">Quick Links</h3>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
            <li><a href="/blog" className="hover:text-accent transition-colors">Blog</a></li>
            <li><a href="/collections" className="hover:text-accent transition-colors">Collections</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-6 font-bold">Newsletter</h3>
          <form className="flex flex-col space-y-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent border-b border-accent py-2 text-sm focus:outline-none focus:border-foreground"
            />
            <button className="text-left text-xs uppercase tracking-widest hover:text-accent transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-accent/10 flex flex-col md:row items-center justify-between text-[10px] uppercase tracking-[0.2em] text-gray-400">
        <p>&copy; 2026 Elegance Magazine & Boutique. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
