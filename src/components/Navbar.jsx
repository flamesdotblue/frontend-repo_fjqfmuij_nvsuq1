import React from 'react';
import { Bell, Shield, Settings, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 shadow ring-1 ring-white/40 flex items-center justify-center text-white font-bold">SD</div>
          <div>
            <h1 className="text-slate-900 font-semibold leading-tight">Smart Disaster Monitoring</h1>
            <p className="text-xs text-slate-500 -mt-0.5">Realtime IoT · PWA · Alerts</p>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg hover:bg-slate-100 transition" aria-label="Notifications">
            <Bell className="h-5 w-5 text-slate-700" />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white"></span>
          </button>
          <button className="p-2 rounded-lg hover:bg-slate-100 transition hidden sm:inline-flex" aria-label="Settings">
            <Settings className="h-5 w-5 text-slate-700" />
          </button>
          <div className="h-8 w-px bg-slate-200 mx-1" />
          <div className="flex items-center gap-2 px-2 py-1.5 rounded-xl bg-slate-900 text-white shadow-sm">
            <Shield className="h-4 w-4 text-cyan-300" />
            <span className="text-xs sm:text-sm font-medium tracking-wide">Admin</span>
          </div>
          <button className="ml-1 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition" aria-label="Profile">
            <User className="h-5 w-5 text-slate-700" />
          </button>
        </nav>
      </div>
    </header>
  );
}
