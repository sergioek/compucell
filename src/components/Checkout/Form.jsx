import React from "react";
import { Formik } from "formik";
import {
  validateForm,
  sameEmail,
  sameEmailValue,
  valueErrorEmail,
} from "./validate.js";
import { Link } from "react-router-dom";

export const Form = ({
  typeSending,
  sending,
  state,
  city,
  changeState,
  finishBuying,
}) => {
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
        finishBuying(event);
      }}
    >
      {({ values, handleChange, handleSubmit, errors, isSubmitting }) => (
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
              placeholder="Ingrese su nombre y apellido."
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
              placeholder="Ingrese su DNI, sin puntos y letras."
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
              placeholder="Ingrese su teléfono sin 0 y 15."
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
              onChange={(event) => {
                handleChange(event);
                sameEmail();
              }}
              value={values.email}
              placeholder="Ingrese su correo electrónico."
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}

            {sameEmailValue && <p className="text-danger">{sameEmailValue}</p>}
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
              onChange={(event) => {
                handleChange(event);
                sameEmail();
              }}
              value={values.emailRepeat}
              placeholder="Ingrese nuevamente su correo electrónico."
            />

            {errors.emailRepeat && (
              <p className="text-danger">{errors.emailRepeat}</p>
            )}

            {sameEmailValue && <p className="text-danger">{sameEmailValue}</p>}
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
              <option value="sucursal-fernandez">
                Retiro en sucursal Fernández
              </option>
              <option value="sucursal-forres">Retiro en sucursal Forres</option>
              <option value="envio-domicilio">
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
                  placeholder="Ingrese su domicilio (calle y número)"
                />
                {errors.address && (
                  <p className="text-danger">{errors.address}</p>
                )}
              </div>
            </div>
          )}

          <div className="buttons">
            <Link to="/cart">
              <button className="bi bi-cart"> Ver carrito</button>
            </Link>

            <button
              className="bi bi-credit-card-2-back"
              type="submit"
              disabled={
                Object.keys(errors).length > 0 ||
                valueErrorEmail ||
                isSubmitting
              }
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
