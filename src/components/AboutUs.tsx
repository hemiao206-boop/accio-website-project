import { Check } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Intro Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-slate-950 mb-6 tracking-tight">
            Supply Chain Excellence & Partner Integrity
          </h2>
          <div className="w-20 h-1.5 bg-brand-gold mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to Ruichuang Metal, a premier global supplier specializing in high-purity copper, aluminum, metal ingots, and industrial scraps. Guided by our core principles of quality, transparency, and reliable service, we bridge the gap between premium raw materials and diverse global industries. Our commitment to commercial integrity and operational excellence is built upon our core strategic pillars:
          </p>
        </div>

        {/* Feature Rows */}
        <div className="space-y-16">
          {/* Row 1: One-Stop Sourcing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="lg:col-span-5">
              <div className="relative group overflow-hidden rounded-2xl shadow-lg border-4 border-white aspect-[4/3] w-full">
                <img 
                  src="/images/about/sourcing-process.png" 
                  alt="One-Stop Sourcing Process" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
                01 / Global Sourcing
              </span>
              <h3 className="text-2xl font-bold text-slate-900">One-Stop Sourcing & Tailored Supply</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                From tailored metallurgical matching and customized packaging to smooth international logistics and hassle-free customs clearance, we manage the complexities of your procurement.
              </p>
            </div>
          </div>

          {/* Row 2: Ready Stock (Swapped & Custom Image) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="lg:col-span-5">
              <div className="relative group overflow-hidden rounded-2xl shadow-lg border-4 border-white aspect-[4/3] w-full">
                <img 
                  src="/images/about/ready-stock.jpg" 
                  alt="Ample Metal Stock Inventory" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
                02 / Ready Stock
              </span>
              <h3 className="text-2xl font-bold text-slate-900">Ready Inventory & Swift Dispatch</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                With robust, ready-to-ship inventory across our standard metal categories, we ensure rapid dispatch and streamlined shipping to keep your industrial operations running uninterrupted.
              </p>
            </div>
          </div>

          {/* Row 3: Factory Visits (Swapped & Current Image) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="lg:col-span-5">
              <div className="relative group overflow-hidden rounded-2xl shadow-lg border-4 border-white aspect-[4/3] w-full">
                <img 
                  src="/images/factory/production-copper.jpg" 
                  alt="Hubei Ruichuang Metal Cooperative Production Workshop" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
                03 / Verification
              </span>
              <h3 className="text-2xl font-bold text-slate-900">Factory Visits & Independent Sampling</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                We warmly welcome buyers for guided factory tours to witness our cooperative production capabilities firsthand. Furthermore, we fully facilitate buyer-designated third-party agencies (such as SGS or BV) to conduct professional on-site sampling and testing prior to ordering.
              </p>
            </div>
          </div>

          {/* Row 4: Global Applications (New) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="lg:col-span-5">
              <div className="relative group overflow-hidden rounded-2xl shadow-lg border-4 border-white aspect-[4/3] w-full">
                <img 
                  src="/images/factory/app-blue.jpg" 
                  alt="Hubei Ruichuang Metal High-End Applications" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
                04 / Industrial Reach
              </span>
              <h3 className="text-2xl font-bold text-slate-900">Global Industrial Applications</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Our high-purity non-ferrous materials serve as the foundational building blocks for critical global industries. From the high-voltage power transmission lines and railway engineering infrastructures that power nations, to high-performance lightweight alloys for modern automotive wheels and state-of-the-art semiconductor electronics, our products drive industrial efficiency and technical progress worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
