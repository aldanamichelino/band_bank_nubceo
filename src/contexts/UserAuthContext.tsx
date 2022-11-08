import { createContext } from 'react';

const authenticatedUser = localStorage.getItem('authenticatedUser');

export interface UserAuthProps {
  isAuthenticated: boolean
  login: (email: string, password: string) => void
  logout: () => void
  errorMessage: string
  error: boolean
}

export const InitialState = {
  isAuthenticated: Boolean(authenticatedUser),
  login: () => {},
  logout: () => {},
  errorMessage: '',
  error: false
};

export const UserAuthContext = createContext<UserAuthProps>(InitialState);
