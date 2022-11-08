import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserAuthContext } from '../contexts/UserAuthContext';

export const PrivateRoute = () => {
  const { isAuthenticated } = useContext(UserAuthContext);

  return (
    isAuthenticated ? <Outlet/> : <Navigate to='/'/>
  );
};
