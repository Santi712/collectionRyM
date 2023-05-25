import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Merch from './Routes/Merch';

import Form from "./Form";
import LoginForm from "./LoginForm";

import Formulario from './Routes/Formulario';
import Ingreso from './Routes/Ingreso';





function App() {
  return (
    <div>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/merch' element={<Merch />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/login' element={<Ingreso />} />
      </Routes>
    </div>
    <div>
    <h1>Aplicación de Registro e Inicio de Sesión</h1>
    <Form mode="register" onSubmit={(data) => console.log(data)} />
    <LoginForm />
  </div>
  </div>
  );
}


export default App;