import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-40 pb-20">
        <h1 className="text-3xl font-serif tracking-widest uppercase mb-12">Terms of Service</h1>
        <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed space-y-6">
          <p>Last Updated: May 2, 2026</p>
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using Coralle Style, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest text-foreground mt-8 mb-4">2. Intellectual Property</h2>
            <p>The content, organization, graphics, design, and other matters related to the Site are protected under applicable copyrights and other proprietary laws.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest text-foreground mt-8 mb-4">3. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on Coralle Style's website for personal, non-commercial transitory viewing only.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest text-foreground mt-8 mb-4">4. Governing Law</h2>
            <p>Any claim relating to Coralle Style's website shall be governed by the laws of the site owner's jurisdiction without regard to its conflict of law provisions.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
