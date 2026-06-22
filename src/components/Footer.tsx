import siteConfig from '@/site-config.json';

export default function Footer() {
  const { company } = siteConfig;

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-white uppercase tracking-widest mb-6">{company.name}</h2>
          <p className="text-sm text-gray-500 max-w-sm leading-loose mb-6">
            A professional metal supply chain and trading enterprise dedicated to high-quality metal supply and operational transparency.
          </p>
          <div className="space-y-2 text-sm">
            <p><span className="text-gray-300 font-semibold">Address:</span> {company.address}</p>
            <p><span className="text-gray-300 font-semibold">Email:</span> {company.email}</p>
            <p>
              <span className="text-gray-300 font-semibold">WhatsApp:</span>{" "}
              <a 
                href={`https://wa.me/8613407194056?text=Hi! I am interested in your metal products.`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-gold transition-colors underline"
              >
                {company.whatsapp}
              </a>
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-6 font-bold text-white">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="/" className="hover:text-brand-gold transition-colors">Home</a></li>
            <li><a href="#products" className="hover:text-brand-gold transition-colors">Products</a></li>
            <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-6 font-bold text-white">Global Supply</h3>
          <p className="text-sm leading-loose">
            Expertly exporting high-purity metals and scraps to key global markets across Europe, Southeast Asia, the Middle East, Africa, and Australia.
          </p>
          <div className="mt-6 p-4 bg-white/5 rounded border border-white/10 italic text-xs">
            "We sincerely welcome friends from all over the world to cooperate with us."
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-[0.2em]">
        <p>&copy; 2026 {company.name}. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}

