import React from 'react';
import { 
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

import './App.css';

function App() {
  return (
    <>      
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
