import { copy } from '../copy';

export function InflationComparison() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            {copy.inflationComparison.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {copy.inflationComparison.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {copy.inflationComparison.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-red-950/20 border border-red-900/30 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-red-400 mb-3">
                {stat.inflation}
              </div>
              <div className="text-2xl font-semibold text-white mb-2">
                {stat.country}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.description} ({stat.year})
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center">
            <div className="text-gray-400 text-sm mb-4 uppercase tracking-wider">
              {copy.inflationComparison.comparison.traditional.title}
            </div>
            <div className="text-4xl font-bold text-red-400 mb-4">
              {copy.inflationComparison.comparison.traditional.rate}
            </div>
            <div className="text-gray-400">
              {copy.inflationComparison.comparison.traditional.result}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-950/50 to-emerald-950/50 border border-blue-800/30 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-600/10"></div>
            <div className="relative z-10">
              <div className="text-gray-300 text-sm mb-4 uppercase tracking-wider font-medium">
                {copy.inflationComparison.comparison.estable.title}
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                {copy.inflationComparison.comparison.estable.rate}
              </div>
              <div className="text-emerald-400 font-medium">
                {copy.inflationComparison.comparison.estable.result}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
