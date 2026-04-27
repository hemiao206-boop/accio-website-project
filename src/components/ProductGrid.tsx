import Image from 'next/image';
import siteConfig from '@/site-config.json';

export default function ProductGrid() {
  const { products } = siteConfig;

  return (
    <section id="shop" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Shop the Look</h2>
        <div className="w-12 h-0.5 bg-accent mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col items-center">
            <div className="relative aspect-[3/4] w-full mb-6 overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-lg font-serif mb-1">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-6 tracking-widest">{product.price}</p>
            <button className="w-full py-4 md:py-3 bg-foreground text-background text-sm md:text-xs uppercase tracking-widest hover:bg-accent hover:text-foreground transition-colors active:scale-95 duration-200">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
