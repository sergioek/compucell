import React from "react";
import { CarouselHome } from "../CarouselHome/CarouselHome";
import { Marks } from "../Marks/Marks";

export const Home = () => {
  return (
    <div className="home">
      <CarouselHome />
      <Marks />
    </div>
  );
};
