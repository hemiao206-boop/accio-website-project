import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AffiliateDisclosure() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-40 pb-20">
        <h1 className="text-3xl font-serif tracking-widest uppercase mb-12">Affiliate Disclosure</h1>
        <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed space-y-6">
          <p>
            At Coralle Style, we believe in being as transparent as possible when it comes to our content and partnerships.
          </p>
          <p>
            In compliance with the FTC guidelines, please assume that any and all links on this website are affiliate links. 
            This means that if you click on a link and make a purchase, we may receive a small commission at no additional cost to you.
          </p>
          <p>
            Our editorial content is not influenced by advertisers or affiliate partnerships. We only recommend products 
            and services that we genuinely love and believe will provide value to our readers.
          </p>
          <p>
            Coralle Style is a participant in several affiliate advertising programs designed to provide a means for sites to earn 
            advertising fees by advertising and linking to their respective retail partners.
          </p>
          <p>
            If you have any questions regarding the above, please do not hesitate to contact us at hello@corallestyle.com.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
