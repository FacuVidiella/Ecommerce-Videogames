import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminPanel from '../AdminPanel/index';
import { useSelector } from 'react-redux';

const PrivateAdminPanel = () => {
    
    const user = useSelector(state=>state.rootReducer.user);

    if (user.length > 0 && user.roleAdmin === true) {
        return <AdminPanel />
    } else {
        return <Navigate to="/" />
    }
}

export default PrivateAdminPanel;