import Navbar from '@/components/Navbar';
import HeroVideo from '@/components/HeroVideo';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroVideo />
      <ProductGrid />
      <Footer />
    </main>
  );
}
