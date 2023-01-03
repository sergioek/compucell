import React from "react";

export const SocialMedia = () => {
  return (
    <div className="socialMedia">
      <ul className="socialMedia-items">
        <li>
          <a
            href="https://www.facebook.com/CompuCellFdez"
            target="_blank"
            className="bi bi-facebook"
          ></a>
        </li>

        <li>
          <a
            href="https://instagram.com/compucell_fdez"
            target="_blank"
            className="bi bi-instagram"
          ></a>
        </li>

        <li>
          <a href="tel:03854789480" className="bi bi-telephone"></a>
        </li>

        <li>
          <a
            href="mailto:compucell.serviciotecnicofdez@gmail.com"
            className="bi bi-envelope"
          ></a>
        </li>
      </ul>
    </div>
  );
};
