'use client';

import { Globe2, Cpu, ChevronRight } from 'lucide-react';

export default function GlobalFootprint() {
  return (
    <section className="bg-slate-900 text-white py-24 px-6 relative overflow-hidden border-t border-white/5">
      {/* Background radial highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto position relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Global Footprint & <span className="text-brand-gold">Industrial Reach</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Connecting premium-grade non-ferrous metal resources to the world's most critical markets and strategic industrial application sectors.
          </p>
        </div>

        {/* Two-Column Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column: Global Market Footprint */}
          <div className="bg-slate-850/50 rounded-3xl p-8 md:p-10 border border-white/5 hover:border-brand-gold/20 transition-all duration-300 flex flex-col justify-between shadow-2xl group">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-brand-gold">
                <Globe2 className="w-8 h-8" />
                <h3 className="text-2xl font-bold text-white">Our Sales Market</h3>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-slate-800 bg-white group-hover:border-brand-gold/30 transition-all duration-500 aspect-[4/3] flex items-center justify-center p-4">
                <img 
                  src="/images/factory/sale-market.png" 
                  alt="Hubei Ruichuang Metal Global Sales Map" 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                With a mature and robust international export network originating from China, Hubei Ruichuang Metal Products serves buyers in key industrial hubs worldwide. Our trade footprint spans the Americas (USA, Chile), Western Europe (Germany, UK, France), East Asia (Russia, South Korea, Japan), South Africa, and Oceania (Australia). We ensure secure ocean freight delivery and seamless cross-border logistics across 5 continents.
              </p>
            </div>
            
            <div className="pt-6 border-t border-white/10 mt-6 flex justify-between items-center text-xs text-brand-gold font-bold tracking-widest uppercase">
              <span>Verified Global Exporter</span>
              <span className="flex items-center">5 Continents Connected <ChevronRight size={14} className="ml-1" /></span>
            </div>
          </div>

          {/* Right Column: Strategic Applications */}
          <div className="bg-slate-850/50 rounded-3xl p-8 md:p-10 border border-white/5 hover:border-brand-gold/20 transition-all duration-300 flex flex-col justify-between shadow-2xl group">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-brand-gold">
                <Cpu className="w-8 h-8" />
                <h3 className="text-2xl font-bold text-white">Strategic Industrial Applications</h3>
              </div>

              <div className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-slate-800 bg-slate-900 group-hover:border-brand-gold/30 transition-all duration-500 aspect-[4/3] flex items-center justify-center">
                <img 
                  src="/images/factory/app-blue.jpg" 
                  alt="Metal products industrial applications" 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Our high-purity metal profiles, refined ingots, and premium recycled scraps act as foundational components for global smart manufacturing and infrastructure. From high-voltage power transmission grids and heavy infrastructure construction to high-performance lightweight automotive alloys, modern electronics data motherboards, and specialized metallurgical casting, our materials drive industrial efficiency and technical progress.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex justify-between items-center text-xs text-brand-gold font-bold tracking-widest uppercase">
              <span>Industrial Grade Materials</span>
              <span className="flex items-center">High-Purity Standards <ChevronRight size={14} className="ml-1" /></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
