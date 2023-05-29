import React from "react";
import Form from "./Form";

const LoginForm = () => {
  const storedData = localStorage.getItem("userData");
  const storedUserData = JSON.parse(storedData);

  const handleLogin = (data) => {
    if (storedUserData && storedUserData.email === data.email && storedUserData.contraseña === data.contraseña) {
      // Acceso concedido
      // Realizar acciones correspondientes, como redireccionar o mostrar un mensaje de éxito.
      console.log("Acceso concedido");
    } else {
      // Acceso denegado
      // Realizar acciones correspondientes, como mostrar un mensaje de error.
      console.log("Acceso denegado");
    }
  };

  return (
    <div>
      <h2>Inicio de sesión</h2>
      <Form mode="login" onLogin={handleLogin} />
    </div>
  );
};

export default LoginForm;