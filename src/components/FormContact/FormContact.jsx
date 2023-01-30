import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import React from "react";
import { Form } from "./Form";

 const MySwal = withReactContent(Swal);
 const alert = (values) => {
  MySwal.fire({
    title: <strong>Mensaje enviado! a {values.email}</strong>,
    html: (
      <i>
        {values.name} pronto recibirá en su correo electrónico una respuesta.
        Muchas gracias.
      </i>
    ),
    icon: "success",
  });
};

export const FormContact = () => {
  return (
    <div className="container">
      <h2 className="text-info">Consultas</h2>
      <Form alert={alert} />
    </div>
  );
};
