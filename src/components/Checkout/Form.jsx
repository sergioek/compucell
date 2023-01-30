import React from "react";
import { Formik } from "formik";
import { validateForm } from "./validate.js";

export const Form = ({ typeSending, sending, state, city, changeState }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        dni: "",
        phone: "",
        email: "",
        emailRepeat: "",
        sending: "",
        state: "",
        city: "",
        address: "",
      }}
      validationSchema={validateForm}
      onSubmit={(event) => {
        console.log(event);
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nombre y apellido
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              onChange={handleChange}
              value={values.name}
            />
            {errors.name && <p className="text-danger">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="dni" className="form-label">
              DNI
            </label>
            <input
              type="text"
              name="dni"
              className="form-control"
              id="dni"
              onChange={handleChange}
              value={values.dni}
            />
            {errors.dni && <p className="text-danger">{errors.dni}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Teléfono
            </label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              id="phone"
              onChange={handleChange}
              value={values.phone}
            />
            {errors.phone && <p className="text-danger">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email-repeat" className="form-label">
              Repita Correo electrónico
            </label>
            <input
              type="email"
              name="emailRepeat"
              className="form-control"
              id="emailRepeat"
              onChange={handleChange}
              value={values.emailRepeat}
            />
            {errors.emailRepeat && (
              <p className="text-danger">{errors.emailRepeat}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="sending" className="form-label">
              Método de envio
            </label>
            <select
              name="sending"
              id="sending"
              className="form-select"
              onChange={(event) => {
                sending(event);
                handleChange(event);
              }}
              value={values.sending}
            >
              <option value="">Seleccione</option>
              <option value="fdz">Retiro en sucursal Fernández</option>
              <option value="forres">Retiro en sucursal Forres</option>
              <option value="homeSending">
                Envío a domicilio (Costo adicional de $2000,00)
              </option>
            </select>
            {errors.sending && <p className="text-danger">{errors.sending}</p>}
          </div>

          {typeSending && (
            <div className="typeSending">
              <div className="form-group">
                <label htmlFor="state" className="form-label">
                  Provincia
                </label>
                <select
                  name="state"
                  id="state"
                  className="form-select"
                  onChange={(event) => {
                    changeState(event);
                    handleChange(event);
                  }}
                  value={values.state}
                  required
                >
                  <option value="">Seleccione</option>
                  {state.map((state) => (
                    <option key={state.id} value={state.nombre}>
                      {state.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="city" className="form-label">
                  Ciudad
                </label>
                <select
                  name="city"
                  id="city"
                  className="form-select"
                  onChange={handleChange}
                  value={values.city}
                  required
                >
                  <option value="">Seleccione</option>
                  {city.length > 0 &&
                    city.map((city) => (
                      <option key={city.id} value={city.nombre}>
                        {city.nombre}
                      </option>
                    ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="address" className="form-label">
                  Dirección
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="form-control"
                  onChange={handleChange}
                  value={values.address}
                />
                {errors.address && (
                  <p className="text-danger">{errors.address}</p>
                )}
              </div>
            </div>
          )}

          <div className="buttons">
            <button className="bi bi-cart"> Ver carrito</button>
            <button
              className="bi bi-credit-card-2-back"
              type="submit"
              disabled={isSubmitting}
            >
              {" "}
              Confirmar compra
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};
