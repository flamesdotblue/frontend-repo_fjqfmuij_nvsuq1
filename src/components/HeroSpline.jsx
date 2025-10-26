import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative h-[380px] sm:h-[460px] md:h-[520px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/10 pointer-events-none" />
      <div className="relative z-10 h-full p-6 sm:p-10 flex flex-col justify-end">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-900 text-white/90 shadow">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Live · IoT Nodes Streaming
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            Futuristic, iridescent control center for disaster intelligence
          </h2>
          <p className="mt-2 text-slate-600">
            Monitor vibration, soil, tilt and pressure in real-time. Receive push, SMS, and voice alerts with offline-ready PWA support.
          </p>
        </div>
      </div>
    </section>
  );
}
