import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';


const BLOG_POSTS = [
  {
    slug: 'reformation-brand-story-recommendations',
    title: 'Reformation: Niche French Aesthetics & Sustainable Brand Story',
    excerpt: 'A deep dive into the French-style representative brand loved by Taylor Swift.',
    date: 'January 12, 2026',
    image: 'https://sc02.alicdn.com/kf/A908b9e86b0724e139649d70dd69b72e2E.png',
  },
  {
    slug: 'reformation-romantic-tech-alchemy',
    title: 'Reformation: The Mad Alchemy of Romance and Technology',
    excerpt: 'How Reformation redefined modern fashion by blending vintage soul with high-tech brains.',
    date: 'April 27, 2026',
    image: 'https://sc02.alicdn.com/kf/Aef1b20b5ef554a4492757870d11e67a4m.png',
  },
  {
    slug: 'the-future-of-eco-luxury-2026',
    title: '2026 Trend Report: Why Minimalism is Turning Floral',
    excerpt: 'Exploring the resurgence of "Quiet Florals" and organic expressions in minimalist fashion.',
    date: 'April 27, 2026',
    image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'how-to-style-minimalist-florals',
    title: 'From Day to Dusk: Styling the Perfect Silk Slip',
    excerpt: 'A single silk slip dress is perhaps the most hardworking piece in a romantic minimalist’s wardrobe.',
    date: 'April 27, 2026',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'sustainable-romanticism-reformation-style',
    title: 'Sustainable Romanticism: The Reformation Aesthetic Decoded',
    excerpt: 'Discover why the philosophy of Reformation aligns perfectly with the modern muse.',
    date: 'April 27, 2026',
    image: 'https://images.unsplash.com/photo-1549064492-368ca3e1c66f?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'the-coralle-style-philosophy',
    title: 'The Coralle Style Philosophy: Why We Choose Romantic Minimalism',
