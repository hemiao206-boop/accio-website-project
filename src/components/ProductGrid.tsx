import Image from 'next/image';
import siteConfig from '@/site-config.json';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ProductGrid() {
  const { products } = siteConfig;

  return (
    <section id="products" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Metal Solutions</h2>
        <div className="w-20 h-1.5 bg-brand-gold mx-auto"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">High-performance metal products tailored to various industries, from selection of raw materials to control of the production process.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition group">
            <div className="relative h-48 bg-gray-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {(product as any).tag && (
                <span className="absolute top-4 right-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded">
                  {(product as any).tag}
                </span>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{(product as any).description}</p>
              <Link href={`/products/${product.id}`} className="text-brand-gold font-bold text-sm flex items-center hover:underline">
                Get Details <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-gray-500 italic">Looking for other scraps? Aluminum wire scrap, electrolytic copper, tin, and more are available.</p>
      </div>
    </section>
  );
}

