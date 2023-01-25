import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where, orderBy,limit } from "firebase/firestore";
import { databaseFirestore } from "../../firebase/config.js";
import { SearchProducts } from "../SearchProducts/SearchProducts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Categories } from "../Categories/Categories";
import { ItemList } from "../ItemList/ItemList";
import { useNavigate, useParams } from "react-router-dom";
import { SelectFilter } from "../SelectFilter/SelectFilter";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterPrice, setFilterPriceOrder] = useState('asc');
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const notify = (message) => {
    toast(message, {
      toastId: 1,
    });
  };

  useEffect(() => {
    const productRef = collection(databaseFirestore, "products");
    let filter;
    //Filtrando por categoria
    if (categoryId) {
      setSearch("");
      filter = query(
        productRef,orderBy('price',filterPrice),
        where("category", "==", categoryId)
      );
    } else if (search.length > 0) {
      filter = query(
        productRef,
        where("reference", "array-contains-any", [
          search.toString().toUpperCase(),
        ]),orderBy('price',filterPrice)
      );
    } else {
      filter = query(productRef, orderBy("price", filterPrice));
    }

    getDocs(filter)
      .then((response) => {
        setLoading(true);
        notify("Filtrando productos...");
        setProducts(
          response.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      })
      .catch((error) => {
        alert(error);
        console.log(error)
      });
  }, [search, categoryId, filterPrice]);

  const searchProduct = (event) => {
    navigate("/productos");
    setSearch(event.target.value);
  };

  const filterPriceOrder = (event) => {
    setSearch(search);
    setFilterPriceOrder(event.target.value);
  };

  return (
    <div className="itemListContainer">
      <div className="titleList">
        <h2>Nuestros productos</h2>
      </div>
      <Categories />
      <SearchProducts functionSearch={searchProduct} search={search} />
      <ToastContainer autoClose={500} />
      <SelectFilter order={filterPriceOrder} />

      {loading ? (
        <ItemList products={products} />
      ) : (
        notify("Cargando los productos...")
      )}
    </div>
  );
};
