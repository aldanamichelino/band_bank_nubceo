import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuthContext, InitialState } from './UserAuthContext';

interface Props {
  children: React.ReactNode
}

const emailRegex = /^[a-zA-Z0-9ñÑ.-]+@[a-zA-Z0-9ñÑ.-]+\.\w{2,4}\b/;

export const UserAuthProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(InitialState.isAuthenticated);
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const login = (email: string, password: string) => {
    if (email === '' || password === '') {
      setError(true);
      setErrorMessage('All fields are mandatory.');
      return;
    }

    if (!emailRegex.test(email)) {
      setError(true);
      setErrorMessage('Please, enter a valid email.');
      return;
    }

    setError(false);
    localStorage.setItem('authenticatedUser', email);
    setIsAuthenticated(true);
    navigate('/bands');
  };

  const logout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
  };

  return (
    <UserAuthContext.Provider value={{ isAuthenticated, login, logout, errorMessage, error }}>
      {children}
    </UserAuthContext.Provider>
  );
};
