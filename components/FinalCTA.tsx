import { copy } from '../copy';

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
          {copy.cta.title}
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          {copy.cta.subtitle}
        </p>
        <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transform hover:scale-105">
          {copy.cta.button}
        </button>
      </div>
    </section>
  );
}
