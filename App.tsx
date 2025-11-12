import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { VaultsSection } from './components/VaultsSection';
import { InflationComparison } from './components/InflationComparison';
import { Features } from './components/Features';
import { FinalCTA } from './components/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Hero />
      <HowItWorks />
      <VaultsSection />
      <InflationComparison />
      <Features />
      <FinalCTA />
    </div>
  );
}
