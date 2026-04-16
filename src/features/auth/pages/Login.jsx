import React from 'react';
import Input from '../../../shared/components/Input';
import { useForm } from 'react-hook-form';

const VERSION = 'v4.8.2-enterprise';

const UserIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4 shrink-0 text-slate-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 21a8 8 0 0 0-16 0" strokeLinecap="round" />
    <circle cx="12" cy="8" r="4" />
  </svg>
);

const LockIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4 shrink-0 text-slate-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="4" y="11" width="16" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14" strokeLinecap="round" />
    <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 3 6 6v5c0 5 2.7 8.2 6 10 3.3-1.8 6-5 6-10V6l-6-3Z" />
    <path d="m9.5 12 1.7 1.7L14.8 10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>
);

const Login = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  let handleFormSumbit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <header>
        <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-900">
          Admin Portal
        </h2>
        <p className="mt-3 text-sm font-medium text-slate-500">
          Please enter your credentials to proceed.
        </p>
      </header>

      <form
        noValidate
        onSubmit={handleSubmit(handleFormSumbit)}
        className="mb-5 mt-10 space-y-6"
      >
        <Input
          id="email"
          type="email"
          name="email"
          label="Email Address"
          placeholder="e.g. gaur_admin@example.com"
          icon={<UserIcon />}
          autoComplete="email"
          error={errors.email?.message}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email address',
            },
          })}
        />

        <Input
          id="password"
          type="password"
          name="password"
          label="Password"
          error={errors.password?.message}
          placeholder=".............."
          icon={<LockIcon />}
          autoComplete="current-password"
          inputClassName="tracking-[0.18em] placeholder:tracking-[0.18em]"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
          action={
            <button
              type="button"
              className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-slate-500 transition hover:text-slate-700"
            >
              Forgot Access?
            </button>
          }
        />

        <button
          type="submit"
          className="flex h-14 w-full items-center justify-center gap-3 rounded-sm bg-[#082146] text-base font-semibold text-white shadow-[0_18px_35px_rgba(8,33,70,0.18)] transition hover:bg-[#0b2b5b]"
        >
          <span>Sign In</span>
          <ArrowRightIcon />
        </button>
      </form>

      <p>
        Don&apos;t have an account{' '}
        <span className="cursor-pointer text-blue-700">Register Here</span>
      </p>

      <footer className="mt-10 border-t border-slate-200 pt-6">
        <p className="text-center text-[0.68rem] font-bold uppercase tracking-[0.36em] text-slate-400">
          Compliance
        </p>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-slate-400">
              SSO Integrated
            </p>
            <div className="mt-3 flex items-center gap-3 text-slate-500">
              <ShieldIcon />
              <GlobeIcon />
            </div>
          </div>

          <p className="text-[0.68rem] font-semibold text-slate-400">{VERSION}</p>
        </div>
      </footer>
    </>
  );
};

export default Login;
