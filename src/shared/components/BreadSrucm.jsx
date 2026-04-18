import React from 'react';
import { Link, useLocation } from 'react-router';

const BreadSrucm = () => {
  const location = useLocation();

  // URL ko "/" ke basis par tod rahe hain.
  // Example: "/dashboard/registration" -> ["dashboard", "registration"]
  const pathNames = location.pathname.split('/').filter((item) => item !== '');

  // Har breadcrumb item ke liye ek array bana rahe hain.
  const breadcrumbItems = [];

  // Is variable me hum step-by-step full path banayenge.
  // Example:
  // pehle: /dashboard
  // phir: /dashboard/registration
  let currentPath = '';

  for (let i = 0; i < pathNames.length; i++) {
    const currentItem = pathNames[i];

    currentPath = `${currentPath}/${currentItem}`;

    // Route name ko readable text me convert kar rahe hain.
    let label = currentItem;

    if (currentItem === 'dashboard') {
      label = 'Dashboard';
    } else if (currentItem === 'employees') {
      label = 'Employees';
    } else if (currentItem === 'registration') {
      label = 'Registration';
    } else {
      label = currentItem.charAt(0).toUpperCase() + currentItem.slice(1);
    }

    breadcrumbItems.push({
      label: label,
      to: currentPath,
      isLast: i === pathNames.length - 1,
    });
  }

  return (
    <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/75 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        {breadcrumbItems.map((item) => (
          <React.Fragment key={item.to}>
            {item.isLast ? (
              <span className="font-semibold text-slate-900">{item.label}</span>
            ) : (
              <Link
                to={item.to}
                className="font-medium text-slate-500 transition hover:text-slate-800"
              >
                {item.label}
              </Link>
            )}

            {!item.isLast && <span className="text-slate-300">/</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BreadSrucm;
