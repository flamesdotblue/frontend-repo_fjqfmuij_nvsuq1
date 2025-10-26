import React from 'react';
import { Activity, AlertTriangle, Network, Clock } from 'lucide-react';

const Stat = ({ icon: Icon, label, value, trend }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-lg">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white flex items-center justify-center shadow">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="text-xl font-semibold text-slate-900">{value}</p>
        </div>
      </div>
      {trend && (
        <span className={`text-xs font-medium ${trend > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
          {trend > 0 ? '+' : ''}{trend}%
        </span>
      )}
    </div>
    <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-cyan-100/60 blur-2xl group-hover:scale-125 transition" />
  </div>
);

export default function DashboardCards() {
  // Mocked values; in the full app these would stream from Firebase
  const stats = [
    { icon: Network, label: 'Nodes Online', value: '24 / 27', trend: 4 },
    { icon: AlertTriangle, label: 'Active Alerts', value: '3', trend: -12 },
    { icon: Clock, label: 'Last Sync', value: '7s ago' },
    { icon: Activity, label: 'Avg. Anomaly', value: '0.07' },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <Stat key={i} {...s} />
      ))}
    </section>
  );
}
