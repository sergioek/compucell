import React from "react";
import { ItemDetails } from "../ItemDetails/ItemDetails";
import DataProducts from "../../bd/productos.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

export const ItemDetailsContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null)

  const getProduct = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(DataProducts)
        reject('Error al cargar productos')
      }, 1000);
    })
  }

  const notify = () => {
    toast("Cargando vista del producto", {
      toastId: 2
    })
  };

  useEffect(() => {
    getProduct()
      .then((response) => {
        let productId = response.find((producto)=>producto.id==Number(id))
        setProduct(productId)
      })
      .catch((error) => {
        alert(error)
      })
  }, [id])
  
  useEffect(() => {
     notify()
  },[])
  
  
  return (
    <div className="itemDetailsContainer">
      {product && <ItemDetails {...product} />}
      {<ToastContainer autoClose={500} />}
    </div>
  );
};
