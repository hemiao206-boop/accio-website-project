'use client';

import { PhoneCall } from 'lucide-react';
import siteConfig from '@/site-config.json';

export default function WhatsAppButton() {
  const { company } = siteConfig;
  const phoneNumber = "8613407194056"; // Clean number for wa.me URL
  const message = encodeURIComponent("Hi! I would like to inquire about Hubei Ruichuang Metal products.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:hidden"></span>
      
      {/* Custom WhatsApp SVG icon */}
      <svg
        className="w-7 h-7 fill-white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.022-.08-.124-.22-.326-.32l-.995-.49c-.2-.1-.4-.1-.585.1l-.43 1.015c-.14.32-.38.42-.68.22-1.705-.85-2.985-2.51-3.435-3.32-.1-.17-.05-.27.1-.42l.745-.85c.1-.12.13-.24.05-.4l-.49-1.15c-.08-.18-.18-.18-.32-.18h-.44c-.14 0-.36.05-.56.27-.2.22-.76.74-.76 1.81s1.14 2.12 1.3 2.34c.16.22 2.24 3.42 5.43 4.79.76.32 1.35.51 1.81.65.76.24 1.45.21 2 .1.61-.1 1.81-.74 2.06-1.46.25-.72.25-1.34.18-1.46zm-5.44 7.42h-.013c-1.93 0-3.82-.52-5.48-1.5l-.393-.233-4.08 1.07 1.09-3.98-.255-.407C1.905 15.1 1.25 13.06 1.25 10.92c0-5.18 4.22-9.4 9.4-9.4 2.51 0 4.87.98 6.64 2.76a9.3 9.3 0 0 1 2.76 6.64c0 5.18-4.22 9.4-9.4 9.4z" />
      </svg>

      {/* Tooltip on hover */}
      <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap border border-white/10 pointer-events-none">
        Chat with Owner
      </span>
    </a>
  );
}
