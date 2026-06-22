import siteConfig from '@/site-config.json';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MediaGallery from '@/components/MediaGallery';
import { notFound } from 'next/navigation';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
  return siteConfig.products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = siteConfig.products.find((p) => p.id.toString() === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <Link href="/#products" className="flex items-center text-gray-500 hover:text-brand-gold mb-8 transition">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
        </Link>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <MediaGallery 
              video={(product as any).video} 
              gallery={(product as any).gallery || [product.image]} 
              productName={product.name} 
            />
          </div>
          
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <div className="w-20 h-1.5 bg-brand-gold mb-6"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>
            
            <div className="bg-gray-50 rounded-xl p-8 mb-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                Technical Specifications
              </h3>
              <div className="space-y-4">
                {Object.entries(product.details || {}).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">{key}</span>
                    <span className="text-gray-900 font-bold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Premium Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Global Shipping to 50+ Countries</span>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="mt-10 block w-full bg-brand-gold text-white text-center font-bold py-4 rounded-lg shadow-lg hover:brightness-110 transition"
            >
              INQUIRY FOR THIS PRODUCT
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
