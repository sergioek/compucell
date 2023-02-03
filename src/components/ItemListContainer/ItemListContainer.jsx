import React, {useState } from "react";
import { SearchProducts } from "../SearchProducts/SearchProducts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Categories } from "../Categories/Categories";
import { ItemList } from "../ItemList/ItemList";
import { useNavigate, useParams } from "react-router-dom";
import { SelectFilter } from "../SelectFilter/SelectFilter";
import { useProducts } from "./hook/useProducts";

export const ItemListContainer = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterPrice, setFilterPriceOrder] = useState("asc");
  const { categoryId } = useParams();

  const notify = (message) => {
    toast(message, {
      toastId: 1,
    });
  };

  useProducts(setProducts,setLoading,filterPrice,categoryId,search,notify,setSearch)

  const searchProduct = (event) => {
    navigate("/products");
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
