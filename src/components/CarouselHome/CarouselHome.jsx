import React from "react";
import { Carousel } from "react-bootstrap";
export const CarouselHome = () => {
  return (
    <Carousel className="mt-2 mb-2 container">
      <Carousel.Item>
        <img
          className="d-block imageCarousel"
          src="/img/banner/baner3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h6>Componentes para tu PC</h6>
          <p>Las mejores marcas gamer.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block imageCarousel"
          src="/img/banner/baner4.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h6>Jugá al mejor nivel</h6>
          <p>
            No pierdas el control y competí a un alto nivel con los mejores
            periféricos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block imageCarousel"
          src="/img/banner/baner5.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h6>Las últimas tecnologías</h6>
          <p>La confiabilidad de las mejores marcas.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
