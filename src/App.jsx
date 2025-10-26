import React from 'react';
import Navbar from './components/Navbar';
import HeroSpline from './components/HeroSpline';
import DashboardCards from './components/DashboardCards';
import AlertsList from './components/AlertsList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <HeroSpline />

        <DashboardCards />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900">Sensor Trends (Preview)</h3>
                <span className="text-xs text-slate-500">Last 24 hours</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['Soil','Vibration','Tilt','Pressure'].map((k) => (
                  <div key={k} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs text-slate-500">{k}</p>
                    <p className="text-lg font-semibold text-slate-900">{Math.random().toFixed(2)}</p>
                    <div className="mt-2 h-2 w-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <AlertsList />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          Built as a futuristic preview of the Smart Disaster Monitoring Dashboard · PWA-ready UI
        </div>
      </footer>
    </div>
  );
}

export default App;
