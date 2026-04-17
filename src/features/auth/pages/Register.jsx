
import Input from '../../../shared/components/Input';
import { Link } from 'react-router';
import useAuth from '../hooks/UseAuth';

const VERSION = 'v4.8.2-enterprise';

// User related icon for name and email fields
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

// Lock icon for password field
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

// Arrow icon for action button
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

// Security icon shown in footer
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

// Global/compliance icon shown in footer
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

const Register = () => {
  // Register page ki sari auth logic useAuth hook se aa rahi hai.
  const {
    register,
    handleSubmit,
    errors,
    fullNameRules,
    emailRules,
    passwordRules,
    onSubmit,
  } = useAuth('register');

  return (
    <>
      {/* Register page heading */}
      <header>
        <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-900">
          Create Account
        </h2>
        <p className="mt-3 text-sm font-medium text-slate-500">
          Fill in your details to create your account.
        </p>
      </header>

      {/* Register form fields */}
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="mb-5 mt-10 space-y-6"
      >
        <Input
          id="fullName"
          type="text"
          name="fullName"
          label="Full Name"
          placeholder="e.g. Tarun Raj Gaur"
          icon={<UserIcon />}
          autoComplete="name"
          error={errors.fullName?.message}
          {...register('fullName', fullNameRules)}
        />

        <Input
          id="email"
          type="email"
          name="email"
          label="Email Address"
          placeholder="e.g. gaur_admin@example.com"
          icon={<UserIcon />}
          autoComplete="email"
          error={errors.email?.message}
          {...register('email', emailRules)}
        />

        <Input
          id="password"
          type="password"
          name="password"
          label="Password"
          error={errors.password?.message}
          placeholder=".............."
          icon={<LockIcon />}
          autoComplete="new-password"
          inputClassName="tracking-[0.18em] placeholder:tracking-[0.18em]"
          {...register('password', passwordRules)}
        />

        <button
          type="submit"
          className="flex h-14 w-full items-center justify-center gap-3 rounded-sm bg-[#082146] text-base font-semibold text-white shadow-[0_18px_35px_rgba(8,33,70,0.18)] transition hover:bg-[#0b2b5b]"
        >
          <span>Sign Up</span>
          <ArrowRightIcon />
        </button>
      </form>

      {/* Login redirect text */}
      <p>
        Already have an account{' '}
        <Link to="/" className="cursor-pointer text-blue-700">
          Login Here
        </Link>
      </p>

      {/* Footer compliance section */}
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

export default Register;
