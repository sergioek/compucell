import { useEffect } from "react";
import {collection,getDocs,query,where,orderBy,limit,} from "firebase/firestore";
import { databaseFirestore } from "../../../firebase/config.js";

export const useProducts = (setProducts, setLoading, filterPrice, categoryId,search,notify,setSearch) => {
  useEffect(() => {
    const productRef = collection(databaseFirestore, "products");
    let filter;
    //Filtrando por categoria
    if (categoryId) {
      setSearch("");
      filter = query(
        productRef,
        orderBy("price", filterPrice),
        where("category", "==", categoryId)
      );
    } else if (search.length > 0) {
      filter = query(
        productRef,
        where("reference", "array-contains-any", [
          search.toString().toUpperCase(),
        ]),
        orderBy("price", filterPrice)
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
        console.log(error);
      });
  }, [search, categoryId, filterPrice]);
};
