import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-40 pb-20 text-center">
        <h1 className="text-4xl font-serif tracking-widest uppercase mb-12">Get in Touch</h1>
        <div className="prose prose-sm max-w-none text-gray-600 leading-loose space-y-8">
          <p>
            We value your feedback and inquiries. Whether you have a question about our content, 
            are interested in a partnership, or just want to say hello, we'd love to hear from you.
          </p>
          <div className="py-12 border-y border-accent/20">
            <p className="text-sm uppercase tracking-widest mb-2 font-bold">Email Us</p>
            <a href="mailto:hello@corallestyle.com" className="text-2xl font-serif hover:text-accent transition-colors">
              hello@corallestyle.com
            </a>
          </div>
          <p className="text-xs uppercase tracking-widest text-gray-400">
            We aim to respond to all inquiries within 48 hours.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
