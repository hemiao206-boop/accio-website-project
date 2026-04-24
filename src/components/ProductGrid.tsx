import Image from 'next/image';

const PRODUCTS = [
  {
    id: 1,
    name: "Silk Satin Midi Dress",
    price: "$299",
    image: "https://images.unsplash.com/photo-1539109132381-31a1ecad720f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Cashmere Wool Coat",
    price: "$550",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Linen Tailored Trousers",
    price: "$180",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Classic Leather Mules",
    price: "$220",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Organza Blouse",
    price: "$150",
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Minimalist Gold Hoops",
    price: "$85",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ProductGrid() {
  return (
    <section id="shop" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Shop the Look</h2>
        <div className="w-12 h-0.5 bg-accent mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group flex flex-col items-center">
            <div className="relative aspect-[3/4] w-full mb-6 overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-lg font-serif mb-1">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-4 tracking-widest">{product.price}</p>
            <button className="w-full py-3 bg-foreground text-background text-xs uppercase tracking-widest hover:bg-accent hover:text-foreground transition-colors">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
