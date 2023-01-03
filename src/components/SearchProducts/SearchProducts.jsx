import React from "react";
import { Form } from "react-bootstrap";
export const SearchProducts = (props) => {
  return (
    <div className="container mb-5">
      <Form className="d-flex">
        <i className="bi bi-search icono-input"></i>
        <Form.Control
          type="search"
          placeholder="Ingrese un texto para buscar un producto"
          className="me-2 bi search"
          aria-label="Search"
          onChange={props.functionSearch}
        />
      </Form>
    </div>
  );
};
