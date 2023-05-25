import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Merch from './Routes/Merch';
<<<<<<< HEAD
=======
import Formulario from './Routes/Formulario';
import Ingreso from './Routes/Ingreso';
>>>>>>> 2491a7a (nuevo x2)



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/merch' element={<Merch />} />
<<<<<<< HEAD
=======
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/login' element={<Ingreso />} />
>>>>>>> 2491a7a (nuevo x2)
      </Routes>
    </div>
  );
}


export default App;