import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useLoginContext } from "../Context/LoginContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { BtnShowPassword } from "../BtnShowPassword/BtnShowPassword";

const validateForm = Yup.object().shape({
  email: Yup.string()
    .email("El email no tiene un formato válido.")
    .required("El campo email es obligatorio."),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres.")
    .max(10, "La contraseña no debe tener mas de 8 caracteres.")
    .matches(/[A-Z]/, "La contraseña debe poseer al menos una mayúscula.")
    .matches(/[a-z]/, "La contraseña debe poseer al menos una minúscula.")
    .matches(/[0-9]/, "La contraseña debe poseer al menos un número.")
    .required("El campo contraseña es obligatorio."),
});

export const Register = () => {
  const { newUser, user, loading, setLoading } = useLoginContext();
  const navigate = useNavigate();
  const [inputPassword, setInputPassword] = useState("password");

  useEffect(() => {
    user.stateLogged && navigate("/products");
  }, [user]);

  const MySwal = withReactContent(Swal);
  const alertRegister = () => {
    MySwal.fire({
      title: <strong>Usuario registrado</strong>,
      html: (
        <i>
          <p>
            Se registro un nuevo usuario. Puede iniciar sesión desde el login.
          </p>
        </i>
      ),
      icon: "success",
    });
  };

  return (
    <div className="register">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validateForm}
        onSubmit={(event, { resetForm }) => {
          newUser(event, resetForm, alertRegister);
          setLoading(true);
        }}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <form className="form" onSubmit={handleSubmit}>
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
                  placeholder="Ingresá una contraseña"
                  className="form-control"
                />
                <BtnShowPassword setInputPassword={setInputPassword} />
              </div>

              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}
            </div>

            <div>
              {user.error && (
                <p className="text-danger mt-2">
                  {user.error ==
                    "Firebase: Error (auth/email-already-in-use)." &&
                    "El email ingresado ya esta registrado."}
                </p>
              )}
            </div>

            <div className="btnRegister">
              {loading ? (
                <button type="submit" className="bi bi-hourglass-split">
                  {" "}
                  Enviando...
                </button>
              ) : (
                <button type="submit" className="bi bi-person-plus">
                  {" "}
                  Registrarse
                </button>
              )}

              <Link to="/login">¿Ya estas registrado? Inicia sesión aquí</Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
