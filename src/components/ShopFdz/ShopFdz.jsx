import React from "react";

export const ShopFdz = () => {
  return (
    <div className="shopFdz">
      <div className="shop__info">
        <h2>Sucursal Fernández</h2>
        <p>Avda. Belgrano y Absalon Rojas, Fernández.</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2096.261496565167!2d-63.89118419782628!3d-27.91800155922066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b14c72883cedd%3A0x7ef1a259c77ab021!2sServicio%20Tecnico%20CompuCell!5e0!3m2!1ses-419!2sar!4v1672440407178!5m2!1ses-419!2sar"
          width={600}
          height={450}
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="shop__contact">
        <h3> Contacto</h3>
        <div className="shop__contact__links">
          <a href="tel:+543854789480" className="bi bi-phone">
            +543854789480
          </a>

          <a
            href="https://wa.me/543854789480?"
            target="_blank"
            className="bi bi-whatsapp"
          >
            {" "}
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
