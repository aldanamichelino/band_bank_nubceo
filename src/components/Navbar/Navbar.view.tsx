import React, { useContext } from 'react';
import { UserAuthContext, UserAuthProps } from '../../contexts/UserAuthContext';

export const Navbar = () => {
  const { logout, isAuthenticated } = useContext<UserAuthProps>(UserAuthContext);
  return (
    <div className="w-full flex justify-between items-center bg-fuchsia-400 h-20">
      <h2 className="text-white font-bold p-4">Welcome to Band Bank!</h2>
      {isAuthenticated &&
        <button className="text-white font-bold p-4" onClick={logout}>Log out</button>
      }
    </div>
  );
};
