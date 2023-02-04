import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useLoginContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import { BtnShowPassword } from "../BtnShowPassword/BtnShowPassword";
import { CheckedSavePassword } from "../CheckedSavePassword/CheckedSavePassword";

const validateForm = Yup.object().shape({
  email: Yup.string()
    .email("El email no tiene un formato válido.")
    .required("El campo email es obligatorio."),
  password: Yup.string().required("El campo contraseña es obligatorio."),
});

export const Login = () => {
  const { user, loading, setLoading, login } = useLoginContext();
  const navigate = useNavigate();
  const [inputPassword, setInputPassword] = useState("password");
  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem("emailCompucell")) || ""
  );
  const [password, setPassword] = useState(
    JSON.parse(localStorage.getItem("passwordCompucell")) || ""
  );

  const [checked, setChecked] = useState(
    JSON.parse(localStorage.getItem("checkedCompucell")) || false
  );

  useEffect(() => {
    user.stateLogged && navigate("/products");
  }, [user]);
  return (
    <div className="login">
      <Formik
        initialValues={{
          email: email,
          password: password,
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
              <div className="input-group">
                <input
                  type={inputPassword}
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Ingresá tu contraseña"
                  className="form-control"
                />
                <BtnShowPassword setInputPassword={setInputPassword} />
              </div>

              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}
            </div>

            <CheckedSavePassword
              values={values}
              checked={checked}
              setEmail={setEmail}
              setPassword={setPassword}
              setChecked={setChecked}
            />

            <div>
              {user.error &&
                (user.error == "Firebase: Error (auth/wrong-password)." ? (
                  <p className="text-danger mt-2">
                    El email y contraseñas no son correctos.
                  </p>
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
