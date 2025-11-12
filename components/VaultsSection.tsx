import { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { Vault } from '../types';
import { copy } from '../copy';

export function VaultsSection() {
  const [vaults, setVaults] = useState<Vault[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVaults();
  }, []);

  async function fetchVaults() {
    try {
      const { data, error } = await supabase
        .from('vaults')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      setVaults(data || []);
    } catch (error) {
      console.error('Error fetching vaults:', error);
    } finally {
      setLoading(false);
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-gray-400">Cargando bóvedas...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            {copy.vaults.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {copy.vaults.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {vaults.map((vault) => (
            <div
              key={vault.id}
              className="bg-gray-950 rounded-2xl border border-gray-800 p-8 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <span className={`text-xs px-3 py-1.5 rounded-full border ${getRiskColor(vault.risk_level || 'medium')}`}>
                  RIESGO {vault.risk_level?.toUpperCase()}
                </span>
                <div className="text-right">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                    {vault.apy}
                  </div>
                  <div className="text-xs text-gray-500">APY</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">{vault.name}</h3>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                {vault.description}
              </p>

              <div className="mb-6">
                <div className="text-xs text-gray-500 mb-3 font-medium">ACTIVOS</div>
                <div className="flex flex-wrap gap-2">
                  {vault.tokens?.map((token, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-lg text-sm font-medium text-gray-300"
                    >
                      {token}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-800">
                <div>
                  <div className="text-xs text-gray-500 mb-1">TVL</div>
                  <div className="text-lg font-semibold text-white">{vault.tvl}</div>
                </div>
                <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 rounded-lg font-medium transition-all duration-200 text-white shadow-lg hover:shadow-xl">
                  Depositar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
