import React from "react";
import { getDoc, collection, doc } from "firebase/firestore";
import { databaseFirestore } from "../../firebase/config.js";
import { ItemDetails } from "../ItemDetails/ItemDetails";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ItemDetailsContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const notify = () => {
    toast("Cargando vista del producto", {
      toastId: 2,
    });
  };

  useEffect(() => {
    const productRefId = doc(databaseFirestore, "products", id);
    getDoc(productRefId)
      .then((product) => {
        setProduct({ ...product.data(), id: product.id });
        if (!product.data()) {
          return navigate("/error404");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    notify();
  }, []);

  return (
    <div className="itemDetailsContainer">
      {<ToastContainer autoClose={500} />}
      {product.name && <ItemDetails {...product} />}
    </div>
  );
};
