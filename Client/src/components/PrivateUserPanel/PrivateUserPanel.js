import React from 'react';
import { Navigate } from 'react-router-dom';
import UserPanel from '../UserPanel/UserPanel';
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import AdminPanel from '../AdminPanel';

const PrivateUserPanel = () => {
    
    
    const { isAuthenticated} = useAuth0();

    const user = useSelector(state => state.rootReducer.user)

    if (isAuthenticated && user && user.roleAdmin) {
        return <AdminPanel />
    } else {
        return <Navigate to="/" />
    }
}

export default PrivateUserPanel;