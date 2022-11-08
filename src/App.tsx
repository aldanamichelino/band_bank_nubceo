import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import './App.css';
import { Login, BandDetail, Dashboard } from './components/index';
import { Navbar } from './components/Navbar/Navbar.view';
import { PrivateRoute } from '../src/utils/PrivateRoute';

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route element={<PrivateRoute/>}>
          <Route path='/bands' element={<Dashboard />} />
          <Route path='/bands/:id' element={<BandDetail />}/>
        </Route>
        <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
