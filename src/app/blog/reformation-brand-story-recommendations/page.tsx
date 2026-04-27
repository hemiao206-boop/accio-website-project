import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ReformationFaithfulPage() {
  return (
    <main className="min-h-screen bg-background pt-32">
      <Navbar />
      <article className="px-6 max-w-2xl mx-auto pb-24">
        <Link href="/blog" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-foreground mb-12 inline-block">
          &larr; Back to Journal
        </Link>
        
        <header className="mb-16 text-center">
          <p className="text-[10px] uppercase tracking-widest text-accent mb-4">January 12, 2026 | Brand Story</p>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            Reformation: Niche French Aesthetics & Sustainable Dress Recommendations
          </h1>
          <p className="text-sm text-gray-500 italic">By missy Xu Youxi</p>
        </header>

        <div className="prose prose-serif max-w-none prose-stone space-y-12 text-gray-700 leading-loose">
          <p className="text-lg">
            Reformation—the name might sound niche, but it is the definitive representative of French-style dresses 👗 and a personal favorite of celebrities like Taylor Swift.
          </p>

          <section>
            <h2 className="text-2xl font-serif mb-6 text-foreground border-b border-accent/20 pb-2">Brand Origins</h2>
            <p>
              Founded in 2009, Reformation began as a small boutique in Los Angeles, repurposing vintage items. It eventually evolved into a full collection that views sustainability as a core constraint rather than just a marketing tactic. Founded by Yael Aflalo, the brand saw a major shift in 2019 when Permira acquired a majority stake to scale operations. In June 2020, Aflalo stepped down following allegations regarding workplace culture, and Hali Borenstein transitioned from President to CEO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-6 text-foreground border-b border-accent/20 pb-2">The Core of Reformation's Strategy</h2>
            <div className="space-y-6">
              <p>
                <strong>Clear Value Proposition:</strong> Reformation sells a recognizable silhouette perfect for weddings, vacations, and date nights. On every product page, the <strong>RefScale</strong> estimates the carbon and water footprint, integrating sustainability directly into the shopping experience.
              </p>
              <p>
                <strong>Fast, Small, and Limited:</strong> Weekly small "drops" allow the team to gauge demand and recut best-selling items, keeping social feeds and emails fresh while avoiding heavy discounting.
              </p>
              <p>
                <strong>Stores as Content Engines:</strong> Boutiques function as showrooms. Shoppers can build their fitting room on touchscreens, and items "magically" appear in <strong>Magic Wardrobes</strong> at the back of the room. This creates a shareable moment while providing the brand with valuable demand data.
              </p>
              <p>
                <strong>Selective Wholesale:</strong> While primarily DTC (Direct-to-Consumer), the brand uses select wholesale partners to expand reach and discovery without creating dependency.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-6 text-foreground border-b border-accent/20 pb-2">Iconic Collaborations</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif mb-2">Kacey Musgraves x Reformation (2024)</h3>
                <p>
                  A 17-piece capsule blending Musgraves' "Deeper Well" era with Western-inspired dresses, knits, and boots. Materials featured recycled cashmere and regenerative wool. Highlights included the Stella silk dress ($348) and the Cotswolds coat ($428), which sold out rapidly across sizes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">HOKA x Reformation (2024)</h3>
                <p>
                  A limited collaboration featuring 100% recyclable performance footwear, successfully merging athletic performance with the brand's aesthetic ecosystem.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-6 text-foreground border-b border-accent/20 pb-2">Pricing Guide</h2>
            <p>
              Silk dresses and occasion gowns typically range from <strong>$328 to $448</strong>, with embellished or bridal styles reaching higher price points.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-6 text-foreground border-b border-accent/20 pb-2">Curated Dress Recommendations</h2>
            <p className="mb-8">
              Based on my personal style preferences, I've curated a few pink, red, and ivory selections from the official site, focusing on silk and sleeveless silhouettes.
            </p>

            <h3 className="text-xl font-serif mb-6 italic">Silk Daily Essentials</h3>
            <div className="grid grid-cols-1 gap-8 mb-12">
              <img src="https://sc02.alicdn.com/kf/A908b9e86b0724e139649d70dd69b72e2E.png" alt="Silk Selection 1" className="w-full rounded-sm" />
              <img src="https://sc02.alicdn.com/kf/Af3c86a0467e54390a1de720dbb8cbfbbH.png" alt="Silk Selection 2" className="w-full rounded-sm" />
              <img src="https://sc02.alicdn.com/kf/Acb31debbc40c4fafa287ed3ef2c313a8u.png" alt="Silk Selection 3" className="w-full rounded-sm" />
            </div>

            <h3 className="text-xl font-serif mb-6 italic">On-Sale Picks</h3>
            <div className="grid grid-cols-1 gap-8 mb-12">
              <img src="https://sc02.alicdn.com/kf/A274fa100d2a24acea248057b0da305cdk.png" alt="Sale Selection 1" className="w-full rounded-sm" />
              <img src="https://sc02.alicdn.com/kf/Aab0c7d3e450f4f789121b82113ac4e62D.png" alt="Sale Selection 2" className="w-full rounded-sm" />
              <img src="https://sc02.alicdn.com/kf/A3362a99d4f0d42179b5c3ec0cc218080u.png" alt="Sale Selection 3" className="w-full rounded-sm" />
            </div>

            <h3 className="text-xl font-serif mb-6 italic">Wedding & Party Gowns</h3>
            <div className="grid grid-cols-1 gap-8 mb-12">
              <img src="https://sc02.alicdn.com/kf/Ad97843d1ec5845c083695275811342f1H.png" alt="Party Selection 1" className="w-full rounded-sm" />
              <img src="https://sc02.alicdn.com/kf/A82b4510065a242c78a037861be22f281R.png" alt="Party Selection 2" className="w-full rounded-sm" />
              <img src="https://sc02.alicdn.com/kf/A667fcf49ba0448f986074ed5440fa37dq.png" alt="Party Selection 3" className="w-full rounded-sm" />
            </div>
          </section>

          <section className="bg-accent/5 p-8 rounded-sm italic border-l-4 border-accent">
            <p className="m-0">
              Beyond the standard filters, I highly recommend using the <strong>"Sustainability"</strong> and <strong>"Bra Friendly"</strong> options. The latter is a true game-changer for avoiding awkward moments while maintaining an elegant silhouette.
            </p>
          </section>

          <footer className="pt-12 text-center border-t border-accent/10">
            <p className="text-lg font-serif">What materials, colors, and styles define your daily and party looks?</p>
          </footer>
        </div>
      </article>
      <Footer />
    </main>
  );
}

