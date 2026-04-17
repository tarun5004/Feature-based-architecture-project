import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuthContext } from '../../shared/hooks/UseContext'

const PublicRoutes = () => {
    let { loginAdmin } = useAuthContext()

    // Public pages (login/register) tabhi dikhani hain jab user logged in na ho.
    // Agar user already logged in hai to usko dashboard bhej do.
    if (loginAdmin) {
        return <Navigate to = "/dashboard" />
    }
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default PublicRoutes
