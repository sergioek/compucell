import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";

const validateForm = Yup.object().shape({
  name: Yup.string()
    .min(6, "El campo nombre y apellido debe contener al menos 6 caracteres.")
    .max(40, "El campo nombre y apellido tiene un límite de 40 caracteres.")
    .required("El campo es obligatorio."),
  email: Yup.string()
    .email("El campo debe ser un email válido.")
    .required("El campo es obligatorio."),
  message: Yup.string()
    .min(6, "El campo mensaje debe contener al menos 6 caracteres.")
    .max(250, "El campo mensaje tiene un límite de 250 caracteres.")
    .required("El campo es obligatorio."),
});

export const Form = ({alert}) => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={(values, { resetForm }) => {
        alert(values);
        resetForm();
      }}
      validationSchema={validateForm}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <form className="container" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Nombre y apellido</label>
            <input
              className="form-control"
              type="text"
              placeholder="Ingrese tu nombre"
              value={values.name}
              onChange={handleChange}
              name="name"
            />
            {errors.name && (
              <strong className="text-danger">{errors.name}</strong>
            )}
          </div>

          <div className="mb-3">
            <label>Correo electrónico</label>
            <input
              className="form-control"
              type="email"
              placeholder="Ingrese tu email"
              value={values.email}
              onChange={handleChange}
              name="email"
            />
            {errors.email && (
              <strong className="text-danger">{errors.email}</strong>
            )}
          </div>

          <div className="mb-3">
            <label>Consulta, duda o sugerencia</label>
            <textarea
              className="form-control"
              as="textarea"
              rows={8}
              placeholder="Ingresa tu mensaje"
              value={values.message}
              onChange={handleChange}
              name="message"
            ></textarea>
            {errors.message && (
              <strong className="text-danger">{errors.message}</strong>
            )}
          </div>

          <button
            className="btn btn-success"
            type="submit"
            disabled={isSubmitting}
          >
            Enviar
          </button>
        </form>
      )}
    </Formik>
  );
}
