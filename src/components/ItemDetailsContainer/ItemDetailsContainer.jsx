import React from "react";
import { getDoc, collection, doc} from "firebase/firestore";
import { databaseFirestore } from "../../firebase/config.js";
import { ItemDetails } from "../ItemDetails/ItemDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

export const ItemDetailsContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null)


  const notify = () => {
    toast("Cargando vista del producto", {
      toastId: 2
    })
  };

  useEffect(() => {
    const productRefId = doc(databaseFirestore, 'products', id)
    getDoc(productRefId)
      .then((product) => {
      setProduct({...product.data(),id:product.id})
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
