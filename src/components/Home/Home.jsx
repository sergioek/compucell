import React from "react";
import { Carousel } from "react-bootstrap";
export const Home = () => {
  return (
    <div>
      <Carousel className="mt-2 mb-2">
        <Carousel.Item>
          <img
            className="d-block imageCarousel container"
            src="../../../public/img/products/baner3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Componentes para tu PC</h3>
            <p>Las mejores marcas gamer.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block imageCarousel container"
            src="../../../public/img/products/baner4.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Jugá al mejor nivel</h3>
            <p>
              No pierdas el control y competí a un alto nivel con los mejores
              periféricos.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block imageCarousel container"
            src="../../../public/img/products/baner5.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Las últimas tecnologías</h3>
            <p>La confiabilidad de las mejores marcas.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
