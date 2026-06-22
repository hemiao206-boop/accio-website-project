import siteConfig from '@/site-config.json';

export default function Stats() {
  const { company } = siteConfig;

  return (
    <section className="bg-trust-blue py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
        {company.stats.map((stat, index) => (
          <div key={index}>
            <p className="text-4xl font-bold mb-2">{stat.value}</p>
            <p className="text-sm uppercase tracking-widest text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
