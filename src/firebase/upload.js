import { databaseFirestore } from "./config.js";
import DataProducts from "../bd/productos.json" assert { type: "json" };
import { addDoc, collection } from "firebase/firestore";

const products = collection(databaseFirestore, "products");

DataProducts.forEach((itemProduct) => {
  addDoc(products, itemProduct);
});

