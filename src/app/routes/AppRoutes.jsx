import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layouts/AuthLayout';
import Login from '../../features/auth/pages/Login';
import Register from '../../features/auth/pages/Register';
import DashBoardLayout from '../layouts/DashBoardLayout';
import HomePage from '../../features/dashboard/pages/HomePage';
import ProtactedRoutes from './ProtactedRoutes';
import PublicRoutes from './PublicRoutes';
import EmployeePage from '../../features/employee/pages/EmployeePage';
import RegistrationPage from '../../features/registration/pages/RegistrationPage';


const AppRoutes = () => {
    let router = createBrowserRouter ([
        {
            path: '/',
            element: <PublicRoutes />,
            children: [
                {
                    path: '',
                    element: <AuthLayout />,
            children: [
                {
                    path: '',
                    element: <Login />,
                },
                {
                    path: 'register',
                    element: <Register />,
                }
            ]
                }
            ]
        },
        {
            path: '/dashboard',
            element: <ProtactedRoutes />,
            children: [
                {
                    path: '',
                    element: <DashBoardLayout />,
            children: [
                {
                    path: '',
                    element: <HomePage />,
                },
                                {
                    path: 'employees',
                    element: <EmployeePage />,
                },
                                {
                    path: 'registration',
                    element: <RegistrationPage />,
                },

            ]
                }
            ]
        }
    ]);

return <RouterProvider router={router} />;
}

export default AppRoutes
