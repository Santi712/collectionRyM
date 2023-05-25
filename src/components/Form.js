import React, { useState } from "react";
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
    localStorage.setItem("userData", jsonData); // Agrega esta línea para guardar el JSON en el localStorage
  };

  return (
    <div className="form-container">
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <br />
          <input
            type="text"
            {...register("nombre", {
              required: true,
              maxLength: 10
            })}
            placeholder="Ingresa tu nombre"
          />
          {errors.nombre?.type === "required" && (
            <p>El campo es requerido</p>
          )}
          {errors.nombre?.type === "maxLength" && (
            <p>El campo debe tener como máximo 10 caracteres</p>
          )}
        </div>
        <div>
          <label>Edad</label>
          <br />
          <input
            type="text"
            {...register("edad")}
            placeholder="Ingresa tu edad"
          />
        </div>
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
          <label>Pais</label>
          <br />
          <select {...register("pais")} placeholder="Selecciona tu país">
            <option value="es">España</option>
            <option value="it">Italia</option>
            <option value="fr">Francia</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      {formData && (
        <div>
          <h3>Datos guardados:</h3>
          <pre>{formData}</pre>
        </div>
      )}
    </div>
  );
};

export default Form;
