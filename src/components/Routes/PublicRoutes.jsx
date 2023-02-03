import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { ItemDetailsContainer } from "../ItemDetailsContainer/ItemDetailsContainer";
import { Contacts } from "../Contacts/Contacts";
import { Error404 } from "../Error404/Error404";
import { Register } from "../Login/Register";
import { Login } from "../Login/Login";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ItemListContainer />} />
      <Route path="/products/:categoryId" element={<ItemListContainer />} />
      <Route path="/product/:id" element={<ItemDetailsContainer />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/error404" element={<Error404 />} />
    </Routes>
  );
};
