import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useLoginContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const validateForm = Yup.object().shape({
  email: Yup.string()
    .email("El email no tiene un formato válido.")
    .required("El campo email es obligatorio."),
  password: Yup.string().required("El campo contraseña es obligatorio."),
});

export const Login = () => {
  const { user, loading, setLoading, login } = useLoginContext();
  const navigate = useNavigate();

  useEffect(() => {
    user.stateLogged && navigate('/products');
    
  },[user])
  return (
    <div className="login">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validateForm}
        onSubmit={(event, { resetForm }) => {
          login(event, resetForm, navigate);
          setLoading(true);
        }}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <form className="form" onSubmit={handleSubmit}>
            <div className="title">
              <h2>Inicia sesión</h2>
              <p>Ingresá tus datos</p>
              <hr />
            </div>
            <div className="inputContainer">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Ingresá tu email"
                className="form-control"
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>

            <div className="inputContainer">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Ingresá tu contraseña"
                className="form-control"
              />
              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}
            </div>

            <div>
              {user.error &&
                (user.error == "Firebase: Error (auth/wrong-password)." ? (
                  <p className="text-danger mt-2">El email y contraseñas no son correctos.</p>
                ) : (
                  <p className="text-danger mt-2">{user.error}</p>
                ))}
            </div>

            <div className="btnLogin">
              {loading ? (
                <button type="submit" className="bi bi-hourglass-split">
                  {" "}
                  Ingresando...
                </button>
              ) : (
                <button type="submit" className="bi bi-box-arrow-in-right">
                  {" "}
                  Iniciar sesión
                </button>
              )}

              <Link to="/register">¡Registrate aquí!</Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
