import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import SuperAdminPanel from '../SuperAdminPanel/SuperAdminPanel';

const PrivateSuperAdminPanel = () => {
    
    
    const { isAuthenticated} = useAuth0();

    const user = useSelector(state => state.rootReducer.user)

    if (isAuthenticated && user && user.superAdmin) {
        return <SuperAdminPanel />
    } else {
        return <Navigate to="/" />
    }
}

export default PrivateSuperAdminPanel;