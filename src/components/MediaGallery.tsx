'use client';

import { useState } from 'react';
import Image from 'next/image';

interface MediaGalleryProps {
  video?: string;
  gallery: string[];
  productName: string;
}

export default function MediaGallery({ video, gallery, productName }: MediaGalleryProps) {
  const [activeMedia, setActiveMedia] = useState<{ type: 'video' | 'image'; url: string }>(
    video ? { type: 'video', url: video } : { type: 'image', url: gallery[0] }
  );

  const mediaItems = [
    ...(video ? [{ type: 'video' as const, url: video }] : []),
    ...gallery.map((url) => ({ type: 'image' as const, url })),
  ];

  return (
    <div className="space-y-4">
      <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl bg-black flex items-center justify-center">
        {activeMedia.type === 'video' ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gray-900">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
            </div>
            <p className="text-white text-lg font-bold mb-2">Factory Inspection Video</p>
            <p className="text-gray-400 text-sm mb-6">Due to the high quality (126MB) of your factory video, we recommend hosting it on YouTube or Vimeo for the smoothest direct playback experience. Currently, you can view it via our secure link.</p>
            <a 
              href={activeMedia.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-inquiry-orange text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition"
            >
              Play HD Video (External)
            </a>
          </div>
        ) : (
          <Image
            src={activeMedia.url}
            alt={productName}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
        {mediaItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveMedia(item)}
            className={`relative aspect-square rounded-md overflow-hidden border-2 transition ${
              activeMedia.url === item.url ? 'border-trust-blue shadow-md' : 'border-transparent hover:border-gray-300'
            }`}
          >
            {item.type === 'video' ? (
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                </div>
              </div>
            ) : (
              <Image src={item.url} alt={`${productName} thumbnail ${index}`} fill className="object-cover" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
