import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Merch from './Routes/Merch';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/merch' element={<Merch />} />
      </Routes>
    </div>
  );
}


export default App;