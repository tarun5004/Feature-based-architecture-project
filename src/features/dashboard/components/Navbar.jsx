import React from 'react';
import { NavLink } from 'react-router';

const NAV_ITEMS = [
  { label: 'Home', to: '/dashboard', icon: 'grid' },
  { label: 'Employees', to: '/dashboard/employees', icon: 'users' },
  { label: 'Registration', to: '/dashboard/registration', icon: 'form' },
];

const GridIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

const UsersIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M16 21a4 4 0 0 0-8 0" />
    <circle cx="12" cy="11" r="3.5" />
    <path d="M22 21a4 4 0 0 0-3-3.87" />
    <path d="M18 7.5a3 3 0 1 1 0 6" />
    <path d="M2 21a4 4 0 0 1 3-3.87" />
    <path d="M6 7.5a3 3 0 1 0 0 6" />
  </svg>
);

const FormIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M8 6h11" />
    <path d="M8 12h11" />
    <path d="M8 18h11" />
    <path d="M4 6h.01M4 12h.01M4 18h.01" strokeLinecap="round" />
  </svg>
);

const ThemeIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07 6.7 17.3M17.3 6.7l1.77-1.77" strokeLinecap="round" />
  </svg>
);

const LogoutIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M15 3h3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-3" />
    <path d="M10 17 15 12 10 7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 12H3" strokeLinecap="round" />
  </svg>
);

const BuildingIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 20h14" strokeLinecap="round" />
    <path d="M8 20V8l4-4 4 4v12" />
    <path d="M10 10h.01M14 10h.01M10 14h.01M14 14h.01" strokeLinecap="round" />
  </svg>
);

const getIcon = (icon) => {
  if (icon === 'users') return <UsersIcon />;
  if (icon === 'form') return <FormIcon />;
  return <GridIcon />;
};

const Navbar = () => {
  return (
    <aside className="flex h-full flex-col justify-between rounded-[2rem] bg-[#082146] px-5 py-6 text-white shadow-[0_24px_60px_rgba(8,33,70,0.22)] lg:px-6">
      <div className="space-y-10">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cyan-100">
              <BuildingIcon />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-white">
                Gaur ERP Solutions
              </p>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                ERP Console
              </p>
            </div>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-slate-200 transition hover:bg-white/15"
            aria-label="Theme toggle"
          >
            <ThemeIcon />
          </button>
        </div>

        <nav className="space-y-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/dashboard'}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-[0_18px_35px_rgba(2,6,23,0.22)]'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <span className="opacity-90">{getIcon(item.icon)}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
        >
          <LogoutIcon />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Navbar;
