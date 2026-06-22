import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-40 pb-20">
        <h1 className="text-3xl font-serif tracking-widest uppercase mb-12">Privacy Policy</h1>
        <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed space-y-6">
          <p>Last Updated: May 2, 2026</p>
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest text-foreground mt-8 mb-4">1. Introduction</h2>
            <p>Welcome to Coralle Style. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest text-foreground mt-8 mb-4">2. Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Identity Data includes first name, last name.</li>
              <li>Contact Data includes email address.</li>
              <li>Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest text-foreground mt-8 mb-4">3. Affiliate Disclosure</h2>
            <p>As an affiliate, we may earn a commission from qualifying purchases made through links on our site. This does not affect the price you pay.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest text-foreground mt-8 mb-4">4. Contact Us</h2>
            <p>If you have any questions about this privacy policy, please contact us at hello@corallestyle.com.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
