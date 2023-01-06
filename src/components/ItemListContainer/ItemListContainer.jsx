import React, { useEffect, useState } from "react";
import DataProducts from "../../bd/productos.json";
import { SearchProducts } from "../SearchProducts/SearchProducts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Categories } from "../Categories/Categories";
import { ItemList } from "../ItemList/ItemList";
import { useNavigate, useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProductos] = useState([]);
  const [search, setSearch] = useState("");
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const extractData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(DataProducts);
        reject("Error al cargar los datos de productos");
      }, 2000);
    });
  };

  useEffect(() => {
    extractData()
      .then((response) => {
        let filter;
        if (categoryId) {
          toast("Filtrando productos...");
          filter = response.filter(
            (products) =>
              products.category == categoryId.toString().toLocaleLowerCase()
          );
        } else if (search.length > 0) {
          filter = response.filter((products) =>
            products.description.includes(search)
          );
        } else {
          filter = response;
        }
        setProductos(filter);
      })
      .catch((error) => {
        alert(error);
      });
  }, [search, categoryId]);

  const searchProduct = (event) => {
    navigate("/productos");
    setSearch(event.target.value.toString().toLowerCase());
  };

  return (
    <div className="itemListContainer">
      <div className="titleList">
        <h2>Nuestros productos</h2>
      </div>
      <Categories />

      <SearchProducts functionSearch={searchProduct} />

      <ToastContainer autoClose={500} />

      <ItemList products={products} />
    </div>
  );
};
