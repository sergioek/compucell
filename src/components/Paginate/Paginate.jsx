import React from "react";

export const Paginate = (props) => {
  return (
    <div className="paginate">
      <button
        className="btn btn-outline-success bi bi-arrow-left-square-fill"
        onClick={props.previous}
      >
        {" "}
        Anterior
      </button>

      <button
        className="btn btn-primary bi bi-arrow-right-square-fill"
        onClick={props.next}
      >
        {" "}
        Siguiente
      </button>
    </div>
  );
};
