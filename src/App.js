import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Merch from './Routes/Merch';
import Formulario from './Routes/Formulario';
import Ingreso from './Routes/Ingreso';
import Inicio from './Routes/Inicio';




function App() {
  return (
    <div>
      <Routes>
      <Route path='/inicio' element={<Inicio />} />
        <Route path='/' element={<Home />} />
        <Route path='/merch' element={<Merch />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/login' element={<Ingreso />} />
      </Routes>
    </div>
  );
}


export default App;