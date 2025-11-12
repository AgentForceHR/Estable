import { copy } from '../copy';

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            {copy.howItWorks.title}
          </h2>
          <p className="text-xl text-gray-400">
            {copy.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {copy.howItWorks.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 h-full hover:border-gray-700 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < copy.howItWorks.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-700 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
