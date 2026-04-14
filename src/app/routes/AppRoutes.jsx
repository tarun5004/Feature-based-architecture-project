import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layouts/AuthLayout';
import Login from '../../features/auth/pages/Login';
import Register from '../../features/auth/pages/Register';
import DashBoardLayout from '../layouts/DashBoardLayout';
import HomePage from '../../features/dashboard/pages/HomePage';


const AppRoutes = () => {
    let router = createBrowserRouter ([
        {
            path: '/',
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
        },
        {
            path: '/dashboard',
            element: <DashBoardLayout />,
            children: [
                {
                    path: '',
                    element: <HomePage />,
                }
            ]
        }
    ]);

return <RouterProvider router={router} />;
}

export default AppRoutes