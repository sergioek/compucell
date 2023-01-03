import React, { useEffect, useState } from "react";
import DataProducts from "../../bd/productos.json";
import { Item } from "../Item/Item";
import { SearchProducts } from "../SearchProducts/SearchProducts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Categories } from "../Categories/Categories";
import { SearchError } from "../SearchError/SearchError";
import { Paginate } from "../Paginate/Paginate";

export const ItemList = () => {
  const [products, setProductos] = useState([]);
  const [search, setSearch] = useState("");
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(8);

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
        if (search.length > 0) {
          filter = response.filter((products) =>
            products.description.includes(search)
          );
        } else {
          filter = response;
        }

        setProductos([...filter].splice(previous, next));
      })
      .catch((error) => {
        alert(error);
      });
  }, [search, previous, next]);

  const searchProduct = (event) => {
    setSearch(event.target.value.toString().toLowerCase());
    console.log(search);
  };

  const handlePreviousPage = () => {
    if (previous > 0) {
      toast("Cargando productos...");
      setPrevious(previous - 8);
      setNext(next - 8);
    }
  };

  const handleNextPage = () => {
    toast("Cargando productos...");
    setPrevious(previous + 8);
    setNext(next + 8);
  };

  return (
    <div>
      <div className="titleList">
        <h2>Nuestros productos</h2>
      </div>
      <Categories />

      <SearchProducts functionSearch={searchProduct} />

      <ToastContainer  autoClose={1000} />
      <div className="itemList">
        {products.length > 0 ? (
          products.map((product) => <Item product={product} key={product.id} />)
        ) : (
          <SearchError />
        )}

        {products.length > 7 ? (
          <Paginate previous={handlePreviousPage} next={handleNextPage} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
