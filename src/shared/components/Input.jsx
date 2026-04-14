import React from 'react';

const Input = (props) => {
  // Parent component se jo values aayengi unhe yahan nikaal rahe hain.
  const {
    id,
    name,
    label,
    type = 'text',
    placeholder = '',
    icon,
    action,
    error,
    className = '',
    inputClassName = '',
    ...restProps
  } = props;

  // Agar name pass nahi hua ho to id ko hi name bana do.
  const inputName = name ? name : id;

  // Reusable classes alag variables me rakhne se JSX clean dikhta hai.
  const labelClasses =
    'mb-2 block text-[0.72rem] font-bold uppercase tracking-[0.22em] text-slate-500';

  const wrapperClasses =
    'flex h-12 items-center gap-3 border border-slate-200 bg-slate-100/90 px-4 transition focus-within:border-slate-400 focus-within:bg-white';

  const defaultInputClasses =
    'h-full w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400';

  // Parent se extra inputClassName aaye to usko default classes ke saath jod do.
  const finalInputClasses = `${defaultInputClasses} ${inputClassName}`.trim();

  return (
    <div className={className}>
      {/* Agar label ya right side action ho tabhi top row dikhao */}
      {(label || action) && (
        <div className="mb-2 flex items-center justify-between gap-4">
          {label ? (
            <label htmlFor={id} className={labelClasses}>
              {label}
            </label>
          ) : (
            <div />
          )}

          {action}
        </div>
      )}

      {/* Ye actual input wrapper hai jisme icon + input dono aayenge */}
      <div className={wrapperClasses}>
        {icon}

        <input
          id={id}
          name={inputName}
          type={type}
          placeholder={placeholder}
          className={finalInputClasses}
          {...restProps}
        />
      </div>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
