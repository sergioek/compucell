import { Item } from "../Item/Item";
import { SearchError } from "../SearchError/SearchError";
export const ItemList = ({ products }) => {
  
  return (
    <div>
      <div className="itemList">
        {products.length > 0 ? (
          products.map((product) => <Item product={product} key={product.id} />)
        ) : (
          <SearchError />
        )}
      </div>
    </div>
  );
};
