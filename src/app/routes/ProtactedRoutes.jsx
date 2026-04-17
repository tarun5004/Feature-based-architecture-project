import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuthContext } from '../../shared/hooks/UseContext'

const ProtactedRoutes = () => {
    let { loginAdmin } = useAuthContext()

    // Protected pages tabhi dikhani hain jab user logged in ho.
    // Agar loginAdmin nahi mila to user ko login page par bhej do.
    if (!loginAdmin) {
        return <Navigate to = "/" />
    }
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default ProtactedRoutes
