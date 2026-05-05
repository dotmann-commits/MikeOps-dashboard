import { Activity, GitBranch, Layers, Zap } from 'lucide-react';
import { metrics } from '../data/mockData';

// Map icon name strings to Lucide components
const iconMap: Record<string, React.ElementType> = {
  Layers,
  Zap,
  GitBranch,
  Activity,
};

export default function Metrics() {
  return (
    <section id="metrics" className="relative overflow-hidden border-t border-blue-100 bg-gradient-to-br from-blue-50 via-sky-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => {
            const Icon = iconMap[m.icon];
            return (
              <div
                key={m.label}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50 border border-gray-100"
              >
                {Icon && (
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                    <Icon size={22} className="text-blue-600" />
                  </div>
                )}
                <p className="text-4xl font-bold text-gray-900">{m.value}</p>
                <p className="text-sm text-gray-500 mt-1 font-medium">{m.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
