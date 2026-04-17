import React from 'react';

const DocumentsList = ({ documents }) => {
  return (
    <div className="space-y-3">
      {documents.map((document) => (
        <div
          key={document.id}
          className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
        >
          <div>
            <p className="text-sm font-semibold text-slate-900">{document.title}</p>
            <p className="mt-1 text-xs font-medium text-slate-400">{document.meta}</p>
          </div>

          <button
            type="button"
            className="rounded-xl border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-700 transition hover:bg-blue-50"
          >
            {document.action}
          </button>
        </div>
      ))}
    </div>
  );
};

export default DocumentsList;
