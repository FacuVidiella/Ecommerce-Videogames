import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import UserPanel from '../UserPanel/UserPanel';

const PrivateProfile = () => {
    
    const { isAuthenticated} = useAuth0();

    if (isAuthenticated) {
        return <UserPanel />
    } else {
        return <Navigate to="/" />
    }
}

export default PrivateProfile;