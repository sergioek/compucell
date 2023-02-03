import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Main } from "../Main/Main";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <PrivateRoutes />
        <PublicRoutes />
      </Main>
      <Footer />
    </BrowserRouter>
  );
};
