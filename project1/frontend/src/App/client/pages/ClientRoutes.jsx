import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ClientRoutes = ({user}) => {
    const router = useNavigate();
    if (!user || user !== "client") {
        return router("/login")
    } else return <Outlet />
}

export default ClientRoutes