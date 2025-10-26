import React from 'react';
import { AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

const AlertRow = ({ item }) => {
  const color = item.severity === 'critical' ? 'text-rose-600 bg-rose-50' : item.severity === 'warning' ? 'text-amber-600 bg-amber-50' : 'text-slate-600 bg-slate-50';
  return (
    <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl bg-white hover:shadow-sm transition">
      <div className="flex items-center gap-3">
        <div className={`h-9 w-9 rounded-lg ${color} flex items-center justify-center`}>
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-900">{item.message}</p>
          <p className="text-xs text-slate-500">Node {item.nodeId} · {new Date(item.ts).toLocaleString()} · {item.severity.toUpperCase()}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {item.acknowledged ? (
          <span className="inline-flex items-center gap-1 text-xs text-emerald-600">
            <CheckCircle2 className="h-4 w-4" /> Acknowledged
          </span>
        ) : (
          <button className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 hover:text-slate-900">
            Acknowledge <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default function AlertsList() {
  const data = [
    { id: 'a1', nodeId: 'node001', ts: Date.now() - 1000 * 60 * 2, severity: 'critical', message: 'High vibration detected', acknowledged: false },
    { id: 'a2', nodeId: 'node014', ts: Date.now() - 1000 * 60 * 17, severity: 'warning', message: 'Soil moisture above threshold', acknowledged: true },
    { id: 'a3', nodeId: 'node021', ts: Date.now() - 1000 * 60 * 45, severity: 'info', message: 'Firmware updated successfully', acknowledged: true },
  ];

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-slate-900 font-semibold">Recent Alerts</h3>
        <button className="text-xs font-medium text-slate-700 hover:text-slate-900">View all</button>
      </div>
      <div className="space-y-3">
        {data.map((item) => (
          <AlertRow key={item.id} item={item} />)
        )}
      </div>
    </section>
  );
}
