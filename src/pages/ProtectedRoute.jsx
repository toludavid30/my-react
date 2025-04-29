import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    if(!isAuthenticated){
        return <Navigate to="/sign-up" replace/>
    }
    return <Outlet/> 
}

export default ProtectedRoute