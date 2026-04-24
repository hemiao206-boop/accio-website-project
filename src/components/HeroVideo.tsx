export default function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover grayscale-[0.2]"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-in-a-park-11516-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-fade-in">Timeless Grace</h1>
        <p className="text-lg md:text-xl uppercase tracking-[0.3em] mb-8">Spring / Summer 2026</p>
        <a href="#shop" className="px-8 py-3 border border-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Explore Collection
        </a>
      </div>
    </section>
  );
}
