import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../../shared/hooks/UseContext';

const emailRules = {
  required: 'Email is required',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
};

const passwordRules = {
  required: 'Password is required',
  minLength: {
    value: 6,
    message: 'Password must be at least 6 characters',
  },
};

const fullNameRules = {
  required: 'Name is required',
  minLength: {
    value: 3,
    message: 'Name must be at least 3 characters',
  },
};

const useAuth = (type) => {
  const navigate = useNavigate();
  const { registerAdmins, setRegisterAdmins, setLoginAdmin } = useAuthContext();

  // Same form setup login aur register dono ke liye hook me rakh diya hai.
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  // Safety ke liye context data ko hamesha array treat kar rahe hain.
  const adminsList = Array.isArray(registerAdmins) ? registerAdmins : [];

  // Login ka pura submit logic hook ke andar shift kiya hai.
  const handleLoginSubmit = (data) => {
    if (adminsList.length === 0) {
      toast.error('No registered account found. Please register first.');
      return;
    }

    const admin = adminsList.find(
      (elem) => elem.email === data.email && elem.password === data.password
    );

    if (!admin) {
      toast.error('Invalid email or password', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }

    // Login success ke baad logged-in admin ko context me store kar rahe hain.
    setLoginAdmin(admin);
    toast.success('Login successful');
    reset();
    navigate('/dashboard');
  };

  // Register ka pura submit logic bhi hook me rakh diya hai.
  const handleRegisterSubmit = (data) => {
    const isAlreadyRegistered = adminsList.some((elem) => elem.email === data.email);

    if (isAlreadyRegistered) {
      toast.error('This email is already registered');
      return;
    }

    const newAdmin = [...adminsList, { id: nanoid(), ...data }];
    setRegisterAdmins(newAdmin);
    toast.success('Account created successfully');
    reset();
    navigate('/');
  };

  return {
    register,
    handleSubmit,
    errors,
    // UI clean rakhne ke liye validation rules bhi hook se hi expose kar rahe hain.
    emailRules,
    passwordRules,
    fullNameRules,
    // Page type ke hisaab se sahi submit handler de rahe hain.
    onSubmit: type === 'register' ? handleRegisterSubmit : handleLoginSubmit,
    goToRegister: () => navigate('/register'),
    goToLogin: () => navigate('/'),
  };
};

export default useAuth;
