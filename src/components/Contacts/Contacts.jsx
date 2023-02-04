import React from "react";
import { ShopFdz } from "../ShopFdz/ShopFdz";
import { ShopForres } from "../ShopForres/ShopForres";
import { FormContact } from "../FormContact/FormContact";

export const Contacts = () => {
  return (
    <div className="shop">
      <ShopFdz />
      <ShopForres />
      <FormContact />
    </div>
  );
};
