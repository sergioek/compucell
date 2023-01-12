import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const FormContact = () => {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    message:''
  });

  const handleData = (event) => {
    setMessage({
      ...message,
      [event.target.name]:event.target.value
    })
  }

  const MySwal = withReactContent(Swal);

  const alert = () => {
    MySwal.fire({
      title: <strong>Mensaje enviado!</strong>,
      html: <i>Pronto recibirá en su correo electrónico una respuesta. Muchas gracias.</i>,
      icon: "success",
    });
  }

  const sendMessage = (event) => {
    event.preventDefault()
    alert()
    setMessage({name:'',email:'',message:''})
  }


  return (
    <div className="container">
      <h2 className="text-info">Consultas</h2>
      <Form className="container" onSubmit={sendMessage}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre y apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese tu nombre"
            value={message.name}
            onChange={handleData}
            name="name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese tu email"
            value={message.email}
            onChange={handleData}
            name="email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Consulta, duda o sugerencia</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            placeholder="Ingresa tu mensaje"
            value={message.message}
            onChange={handleData}
            name="message"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}
