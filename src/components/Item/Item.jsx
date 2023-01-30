import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export const Item = (props) => {
  const { id, name, mark, model, price, image,stock } = props.product;
  return (
    <div
      className="item"
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-delay="500"
      data-aos-duration="500"
    >
      <img src={image} alt={name} />
      <div className="item__text">
        <h5>{name + " " + mark + " " + model}</h5>
        <strong>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </strong>
        {
           stock >0 && stock<=3 && <p className="text-success mt-2">¡Últimas unidades!</p>
        }

        {
          stock<=0 && <p className="text-danger mt-2">Sin stock</p>
        }
 
        <Link to={`/producto/${id}`}>
          <button>+Info</button>
        </Link>
      </div>
    </div>
  );
};
