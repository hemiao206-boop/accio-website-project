import siteConfig from '@/site-config.json';

export default function HeroVideo() {
  const { hero } = siteConfig;

  return (
    <section className="relative h-[600px] flex items-center text-white overflow-hidden pt-20">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <img 
        src={hero.imageUrl} 
        alt="Hubei Ruichuang Metal Factory Gate" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            {hero.title}
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#products" className="bg-brand-gold text-white px-8 py-4 rounded font-bold text-center hover:brightness-110 transition">
              View Catalog
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold text-center hover:bg-white/10 transition">
              {hero.ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
