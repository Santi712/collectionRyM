import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    const jsonData = JSON.stringify(data);
    setFormData(jsonData);
    localStorage.setItem("userData", jsonData); 
  };

  return (
    <div className="form-container">
      <h2>Inicio de sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <br />
          <input
            type="text"
            {...register("email", {
              pattern: /[^\s@]+@[^\s@]+\.[^\s@]+/gi
            })}
            placeholder="Ingresa tu email"
          />
          {errors.email?.type === "pattern" && (
            <p>El formato del email es incorrecto</p>
          )}
        </div>
        <div>
          <label>Contraseña</label>
          <br></br>
          <input
            type="password"
            {...register("contrasenia", {
              required: true,
              minLength: 6
            })}
            placeholder="Ingresa tu contraseña"
          />
          {errors.contrasenia?.type === "required" && (
            <p>El campo es requerido</p>
          )}
          {errors.contrasenia?.type === "minLength" && (
            <p>La contraseña debe tener al menos 6 caracteres</p>
          )}
        </div>
        <button className="entrar"><Link to='/'>Entrar</Link></button>
      </form>
    </div>
  );
};

export default Form;