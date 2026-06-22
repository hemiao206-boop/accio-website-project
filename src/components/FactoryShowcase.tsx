'use client';

import { useState, useEffect } from 'react';
import { Factory, Warehouse, ShieldAlert, BadgeCheck, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

export default function FactoryShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const tabs = [
    {
      id: 0,
      tabName: "Production & Smelting",
      icon: Factory,
      title: "Strategic Metallurgy & Production Capabilities",
      description: "Supported by robust cooperative smelting facilities, our production partners utilize high-capacity continuous casting machines, heavy-duty hot rolling mills, and automated extrusion systems. This advanced metallurgy infrastructure ensures consistent quality control from raw liquid metal to standardized finished plates, rods, and coils, matching the highest global industrial tolerances.",
      gallery: ["/images/factory/production-grid.jpg"],
      bullets: [
        { title: "Continuous Casting", desc: "Uniform structural composition with zero voids." },
        { title: "Heavy-Duty Hot Rolling", desc: "Precise thickness controls matching custom tolerances." }
      ]
    },
    {
      id: 1,
      tabName: "Warehousing & Inventory",
      icon: Warehouse,
      title: "Robust Warehouse Reserves & Ready Stock",
      description: "Through strategic supply chain coordination near major export hubs, we facilitate access to expansive warehousing and ready-to-ship inventories. We maintain stable reserves of standard non-ferrous metals and specialty ingots (such as Indium, Bismuth, and Antimony), shielding international buyers from global market price fluctuations and ensuring uninterrupted supply flows for large-scale operations.",
      gallery: [
        "/images/factory/warehouse/1.png",
        "/images/factory/warehouse/2.jpg",
        "/images/factory/warehouse/3.jpg",
        "/images/factory/warehouse/4.jpg",
        "/images/factory/warehouse/7.jpg",
        "/images/factory/warehouse/8.jpg",
        "/images/factory/warehouse/9.jpg"
      ],
      bullets: [
        { title: "15+ Core Categories", desc: "All core non-ferrous metal profiles kept in immediate storage." },
        { title: "Stable Market Reserves", desc: "Guaranteed shipping schedules even during supply chain shocks." }
      ]
    },
    {
      id: 2,
      tabName: "Export Packaging",
      icon: ShieldAlert,
      title: "Arduous Sea Voyage Protective Packaging",
      description: "We understand that transoceanic shipping presents severe moisture and physical hazards to heavy metals. Our logistics coordination includes high-integrity export packaging designed for arduous sea voyages: copper wire scraps are tightly compressed and steel-bundled; aluminum and lead ingots are double-strapped on heavy-duty pallets; and high-purity rare metals are vacuum-sealed in anti-vibration wooden crates.",
      gallery: [
        "/images/factory/packaging/1.jpg",
        "/images/factory/packaging/2.jpg",
        "/images/factory/packaging/3.jpg",
        "/images/factory/packaging/4.jpg",
        "/images/factory/packaging/5.jpg",
        "/images/factory/packaging/6.jpg",
        "/images/factory/packaging/7.jpg"
      ],
      bullets: [
        { title: "Anti-Oxidization Shields", desc: "Vacuum sealing and anti-moisture barrier wraps." },
        { title: "Steel-Strapped Palletization", desc: "Double-reinforced bundling preventing movement or scratching." }
      ]
    },
    {
      id: 3,
      tabName: "Inspection & SGS",
      icon: BadgeCheck,
      title: "Established Certifications & Independent Inspection Support",
      description: "Backed by our official ISO 9001:2015 quality management system certification and verified SGS chemical analysis test reports, we maintain an established baseline of technical purity. To ensure complete peace of mind and transaction safety, we fully support independent pre-shipment inspections (such as SGS or BV) conducted under standard sales agreements. We facilitate on-site sampling, weight verification, and container sealing to guarantee that every delivery perfectly matches your required specifications before dispatch.",
      gallery: ["/images/factory/certificates.jpg"],
      bullets: [
        { title: "Verified Certifications", desc: "Verifiable ISO 9001:2015 and verified SGS chemical analysis reports." },
        { title: "Contract-Backed Inspection", desc: "Full cooperation with third-party pre-shipment inspections (PSI) under standard agreements." }
      ]
    }
  ];

  const active = tabs[activeTab];

  // Reset image index when switching tabs
  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeTab]);

  // Autoplay internal gallery if there are multiple images
  useEffect(() => {
    const gallery = active.gallery;
    if (gallery.length <= 1) return;

    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % gallery.length);
    }, 4500); // Internal slideshow rotates every 4.5 seconds
    return () => clearInterval(timer);
  }, [activeTab, activeImageIndex]);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + active.gallery.length) % active.gallery.length);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % active.gallery.length);
  };

  return (
    <section className="bg-slate-950 text-white py-24 px-6 relative overflow-hidden border-t border-white/5">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto position relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Operational Transparency & <span className="text-brand-gold">Delivery Assurance</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg leading-relaxed">
            We deliver more than premium materials. Through certified smelting partnerships, robust stock holdings, sea-voyage packaging, and complete quality verification, we guarantee absolute supply chain reliability.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto pb-4 md:overflow-x-visible md:pb-0 justify-start lg:justify-between items-center space-x-2 border-b border-white/10 mb-12 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-4 border-b-2 font-bold text-sm md:text-base whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-brand-gold text-brand-gold bg-brand-gold/5'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <Icon size={18} />
                <span>{tab.tabName}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div key={activeTab} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-fade-in">
          {/* Left Large Image Carousel */}
          <div className="lg:col-span-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl border-4 border-slate-800 hover:border-brand-gold/50 transition duration-500 aspect-[4/3] w-full">
              {/* Image Transition wrapper */}
              <img 
                src={active.gallery[activeImageIndex]} 
                alt={active.title} 
                className="w-full h-full object-contain bg-slate-900/90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>

              {/* Carousel Left/Right Controls */}
              {active.gallery.length > 1 && (
                <>
                  <button 
                    onClick={handlePrevImage} 
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white p-2 rounded-full cursor-pointer transition z-30 opacity-0 group-hover:opacity-100 duration-300"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={handleNextImage} 
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white p-2 rounded-full cursor-pointer transition z-30 opacity-0 group-hover:opacity-100 duration-300"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Carousel Pagination Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {active.gallery.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setActiveImageIndex(idx); }}
                        className={`w-2.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          activeImageIndex === idx ? 'bg-brand-gold w-5' : 'bg-white/40 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Text Description */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight">
              {active.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-base">
              {active.description}
            </p>

            {/* Gold Bullet Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              {active.bullets.map((bullet, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center space-x-2 text-brand-gold">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    <h5 className="font-extrabold text-sm uppercase tracking-wide text-white">{bullet.title}</h5>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed pl-3.5">{bullet.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
