import React from "react";
import { ItemDetails } from "../ItemDetails/ItemDetails";
import DataProducts from "../../bd/productos.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast,ToastContainer} from "react-toastify";

export const ItemDetailsContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({})

  const getProduct = () => {
    return new Promise((resolve, reject) => {
      toast("Cargando vista de producto");
      setTimeout(() => {
        resolve(DataProducts)
        reject('Error al cargar productos')
      }, 1000);
    })
  }

  useEffect(() => {
    getProduct()
      .then((response) => {
        let productId = response.find((producto)=>producto.id==Number(id))
        setProduct(productId)
      })
      .catch((error) => {
        alert(error)
      })
  },[id])
  
  return (
    <div>
      <ToastContainer autoClose={500} />
      {product && <ItemDetails {...product} />}
    </div>
  );
};
