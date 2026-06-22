import Navbar from '@/components/Navbar';
import HeroVideo from '@/components/HeroVideo';
import Stats from '@/components/Stats';
import ProductGrid from '@/components/ProductGrid';
import FactoryShowcase from '@/components/FactoryShowcase';
import AboutUs from '@/components/AboutUs';
import InquiryForm from '@/components/InquiryForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroVideo />
      <Stats />
      <AboutUs />
      <ProductGrid />
      <FactoryShowcase />
      <InquiryForm />
      <Footer />
    </main>
  );
}
