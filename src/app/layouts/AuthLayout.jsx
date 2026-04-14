import React from 'react';
import { Outlet } from 'react-router';

const BRAND_NAME = 'Gaur ERP Solutions';

const BuildingIcon = ({ className = 'h-5 w-5' }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M5 20h14" strokeLinecap="round" />
    <path d="M8 20V8l4-4 4 4v12" />
    <path d="M10 10h.01M14 10h.01M10 14h.01M14 14h.01" strokeLinecap="round" />
  </svg>
);

const BrandLogo = ({ dark = false }) => {
  const wrapperClass = dark
    ? 'flex h-10 w-10 items-center justify-center rounded-md bg-[#082146] text-white'
    : 'flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-slate-100';

  const textClass = dark
    ? 'text-lg font-semibold tracking-tight text-slate-900'
    : 'text-lg font-semibold tracking-tight text-white';

  return (
    <div className="flex items-center gap-3">
      <div className={wrapperClass}>
        <BuildingIcon />
      </div>
      <p className={textClass}>{BRAND_NAME}</p>
    </div>
  );
};

const VisualPanel = () => (
  <div className="relative hidden w-[55%] overflow-hidden bg-[#082146] px-8 py-10 text-white lg:flex lg:flex-col lg:justify-between xl:px-10 xl:py-12">
    <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(9,38,79,0.95),rgba(4,26,56,0.94))]" />

    <div className="absolute inset-0 opacity-40">
      <div className="absolute -right-20 top-14 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-24 left-16 h-40 w-[72%] rounded-t-[2.5rem] border border-white/8 bg-white/5" />
      <div className="absolute bottom-16 left-24 h-24 w-[58%] border border-white/8 bg-transparent" />
      <div className="absolute bottom-12 left-28 h-3 w-[46%] bg-white/10" />
      <div className="absolute bottom-7 left-32 h-3 w-[38%] bg-white/10" />
    </div>

    <div className="relative z-10">
      <BrandLogo />

      <div className="mt-16 max-w-md">
        <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.04em]">
          Curating the
          <br />
          Future of
          <br />
          <span className="text-[#7ea6ef]">Human Capital.</span>
        </h1>

        <p className="mt-8 max-w-sm text-base leading-7 text-slate-300">
          Access the architectural standard for enterprise resource management and
          organizational design.
        </p>
      </div>
    </div>

    <div className="relative z-10 mt-10 max-w-xs rounded-2xl border border-white/10 bg-white/6 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-400">
        System Status
      </p>
      <div className="mt-4 flex items-center gap-3 text-sm text-slate-200">
        <span className="h-2.5 w-2.5 rounded-full bg-sky-300 shadow-[0_0_0_4px_rgba(125,211,252,0.12)]" />
        <span>All nodes operational</span>
      </div>
    </div>
  </div>
);

const AuthLayout = () => {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_42%),linear-gradient(135deg,_#f8fafc_0%,_#eef2f7_45%,_#f8fafc_100%)] px-4 py-8 font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] text-slate-900 sm:px-6 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 shadow-[0_30px_90px_rgba(15,23,42,0.14)] backdrop-blur md:min-h-[680px]">
        <VisualPanel />

        <div className="flex w-full items-center justify-center bg-white px-5 py-8 sm:px-8 lg:w-[45%] lg:px-10 xl:px-12">
          <div className="w-full max-w-md">
            <div className="mb-10 lg:hidden">
              <BrandLogo dark />
            </div>

            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
