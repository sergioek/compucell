import React from "react";

export const Checkout = () => {
  return (
    <div className="container mt-4">
      <div>
        <h2 className="text-primary">Ingresá tus datos</h2>
        <hr />
      </div>

      <form className="form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nombre y apellido
          </label>
          <input type="text" name="name" className="form-control" id="name" />
        </div>

        <div className="form-group">
          <label htmlFor="dni" className="form-label">
            DNI
          </label>
          <input type="number" name="dni" className="form-control" id="dni" />
        </div>

        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nombre y apellido
          </label>
          <input type="text" name="name" className="form-control" id="name" />
        </div>
      </form>
    </div>
  );
};
