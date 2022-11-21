import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home.js'
import Error from './pages/error.js'
import AreasPracticas from './pages/areasPracticas'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/areasPracticas' element={<AreasPracticas/>} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
