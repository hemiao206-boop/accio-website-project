import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif tracking-widest uppercase">
          Elegance
        </Link>
        <div className="hidden md:flex space-x-12 text-sm uppercase tracking-widest">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
          <Link href="/collections" className="hover:text-accent transition-colors">Collections</Link>
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
        </div>
        <button className="text-sm uppercase tracking-widest border-b border-foreground">
          Contact
        </button>
      </div>
    </nav>
  );
}
