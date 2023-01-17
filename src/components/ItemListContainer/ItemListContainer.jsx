import React, { useEffect, useState } from "react";
import DataProducts from "../../bd/productos.json";
import { SearchProducts } from "../SearchProducts/SearchProducts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Categories } from "../Categories/Categories";
import { ItemList } from "../ItemList/ItemList";
import { useNavigate, useParams } from "react-router-dom";
import { SelectFilter } from "../SelectFilter/SelectFilter";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const ItemListContainer = () => {
  const [products, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterPrice, setFilterPriceOrder] = useState("menor");
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

  const notify = () => {
    toast("Filtrando productos...", {
      toastId: 1,
    });
  };

  
  const MySwal = withReactContent(Swal);

  const alertLoading = () => {
    MySwal.fire({
      title: <strong>Cargando productos...</strong>,
      html: <i>Este proceso puede tardar unos segundos 😎</i>,
      icon: "info",
      showConfirmButton: false,
      timer:2000
    });
  }


  useEffect(() => {
    extractData()
      .then((response) => {
        notify();
        setLoading(true)
        let filter;
        if (categoryId) {
          setSearch("");
          filter = response.filter(
            (products) =>
              products.category == categoryId.toString().toLocaleLowerCase()
          );
        } else if (search.length>0) {
          filter = response.filter((products) =>
            products.description.includes(search)
          );
        } else {
          filter = response;
        }

        //Filtrando orden
        filterPrice == "menor"
          ? (filter = filter.sort((a, b) => a.price - b.price))
          : (filter = filter.sort((a, b) => b.price - a.price));

        setProductos(filter);

      })
      .catch((error) => {
        alert(error);
      });
  }, [search, categoryId,filterPrice]);

  const searchProduct = (event) => {
    navigate("/productos");
    setSearch(event.target.value.toString().toLowerCase());
  };

  const filterPriceOrder = (event) => {
    setSearch(' ')
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
      {loading ? <ItemList products={products} /> : alertLoading()}
    </div>
  );
};
