import { useState } from "react";
export const ItemCount = ({ stock }) => {
  const [countProduct, setCountProduct] = useState(1);

  const decrementCount = () => {
    countProduct > 1 && setCountProduct(countProduct - 1);
  };
  const incrementCount = () => {
    countProduct < stock && setCountProduct(countProduct + 1);
  };
  return stock > 0 ? (
    <div className="itemCountToCart">
      <button onClick={decrementCount}>-</button>
      <input type="number" value={countProduct} disabled />
      <button onClick={incrementCount}>+</button>
    </div>
  ) : (
    <h3 className="text-danger">Sin Stock disponible!</h3>
  );
};
