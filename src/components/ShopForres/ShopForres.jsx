import React from "react";

export const ShopForres = () => {
  return (
    <div className="shopForres">
      <div className="shop__info">
        <h2>Sucursal Forres</h2>
        <p>Avda. San Martín y Santa Fe, Ingeniero Forres</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1399.654495311426!2d-63.981496653365575!3d-27.874085675078753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d-27.8744639!2d-63.981122!4m3!3m2!1d-27.8745066!2d-63.981137399999994!5e0!3m2!1ses-419!2sar!4v1672440562540!5m2!1ses-419!2sar"
          width={600}
          height={450}
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="shop__contact">
        <h3>Contacto</h3>
        <div className="shop__contact__links">
          <a target="__blank" href="tel:+543853137897" className="bi bi-phone">
            +543853137897
          </a>
          <p>
            <a
              href="https://wa.me/543853137897?"
              target="_blank"
              className="bi bi-whatsapp"
            >
              {" "}
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
