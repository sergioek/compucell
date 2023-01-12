
export const ItemCount = ({ stock,count,setCount }) => {

  const decrementCount = () => {
    count > 1 && setCount(count- 1);
  };

  const incrementCount = () => {
    count < stock && setCount(count + 1);
  };

  return stock > 0 ? (
    <div className="itemCountToCart">
      <button onClick={decrementCount}>-</button>
      <input type="number" value={count} disabled />
      <button onClick={incrementCount}>+</button>
    </div>
  ) : (
    <h3 className="text-danger">Sin Stock disponible!</h3>
  );
};
