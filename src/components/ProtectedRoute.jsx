import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

    const name =useSelector(state=>state.nameSlice)

    if (name) {
        return <Outlet />
    }
    else{
        return <Navigate to='/'/>
    }
}

export default ProtectedRoute
