import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import AppRoutes from './app/routes/AppRoutes.jsx'
import { AuthProvider } from './context/AuthContext.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(

    <AuthProvider>
        <AppRoutes />
        {/* Global toast container:
            Isse Login/Register ya kisi bhi page se toast call karoge to message visible hoga. */}
        <ToastContainer />
    </AuthProvider>  

);
