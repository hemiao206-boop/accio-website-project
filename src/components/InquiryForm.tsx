'use client';

import siteConfig from '@/site-config.json';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function InquiryForm() {
  const { company } = siteConfig;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setMessage(result.message);
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setMessage(result.message);
      }
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-trust-blue p-12 text-white">
            <h2 className="text-3xl font-bold mb-8">Quick Contact</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="text-brand-gold w-6 h-6 flex-shrink-0" />
                <p className="text-sm text-gray-200">{company.address}</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-brand-gold w-6 h-6 flex-shrink-0" />
                <p className="text-sm text-gray-200">{company.email}</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-brand-gold w-6 h-6 flex-shrink-0" />
                <a 
                  href={`https://wa.me/8613407194056?text=Hi! I am interested in your metal products.`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-gray-200 hover:text-white hover:underline"
                >
                  WhatsApp: {company.whatsapp}
                </a>
              </div>
            </div>
            <div className="mt-12 p-6 bg-white/10 rounded-lg border border-white/20">
              <p className="text-sm italic">"We sincerely welcome friends from all over the world to cooperate with us."</p>
            </div>
          </div>
          <div className="md:w-2/3 p-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="fullName"
                  required
                  placeholder="Full Name" 
                  className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold transition" 
                />
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold transition" 
                />
              </div>
              <select 
                name="product"
                required
                className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold transition bg-white"
              >
                <option value="">Select Interested Product</option>
                {siteConfig.products.map(p => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
              <textarea 
                name="requirements"
                required
                rows={4} 
                placeholder="Hi, I am interested in your products. Please provide the latest quote for [Quantity] MT to [Destination Port]. Also, could you share the chemical composition (COA) and packaging details? Looking forward to your response."
                className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold transition"
              ></textarea>
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-brand-gold text-white font-bold py-4 rounded-lg shadow-lg hover:brightness-110 transition transform hover:-translate-y-1 flex items-center justify-center disabled:opacity-50"
              >
                {status === 'loading' ? 'SENDING...' : 'SEND INQUIRY NOW'}
                <Send className="ml-2 w-5 h-5" />
              </button>
              
              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 animate-fade-in">
                  {message}
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 animate-fade-in">
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Global Sales Route Map - Subtle Trust Indicator */}
        <div className="mt-16 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 bg-white rounded-xl p-2 flex items-center justify-center border border-gray-100 max-h-[300px]">
            <img 
              src="/images/logistics-coverage.jpg" 
              alt="Hubei Ruichuang Metal Global Shipping & Logistics Routes" 
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h4 className="text-xl font-bold text-slate-900">Global Logistics & Shipping Coverage</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              We leverage highly streamlined global shipping channels and multi-modal logistics from China's central export hubs. This ensures smooth, reliable transit paths to major buying regions across North America, South America, Western Europe, the Middle East, East Asia, South Africa, and Oceania, delivering secure cross-border supply chain support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

