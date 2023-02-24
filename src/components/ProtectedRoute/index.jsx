import React from 'react'
import { useAuthContext } from '../../contexts/authContext'
import { Navigate } from 'react-router'

const ProtectedRoute = ({children}) => {
    const {isAuthorized} = useAuthContext()
    console.log('from protected rout',isAuthorized)
    if(!isAuthorized){
        return <Navigate to="/login" />
    }

    return children
}

export default ProtectedRoute