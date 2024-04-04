import React from 'react'
import { Outlet, useLocation, Navigate } from 'react-router-dom';

const RequiredAuth = () => {
    const token = localStorage.getItem('token');
    const location = useLocation();

  return (
    token && token.length > 0 ? (
        <Outlet />
    ) : <Navigate to="/login" state={{ from: location }} replace />
  )
};

export default RequiredAuth