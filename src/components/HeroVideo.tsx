import siteConfig from '@/site-config.json';

export default function HeroVideo() {
  const { hero } = siteConfig;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        key={hero.videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover grayscale-[0.2]"
      >
        <source src={hero.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-4xl md:text-7xl font-serif mb-4 md:mb-6 animate-fade-in">{hero.title}</h1>
        <p className="text-sm md:text-xl uppercase tracking-[0.3em] mb-6 md:mb-8">{hero.subtitle}</p>
        <a href="#shop" className="px-8 py-3 border border-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          {hero.ctaText}
        </a>
      </div>
    </section>
  );
}
