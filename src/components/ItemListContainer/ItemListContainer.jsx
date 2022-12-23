import { ItemCount } from "../ItemCount/ItemCount"
export const ItemListContainer = ({greeting}) => {
  return (
    <div className="itemListContainer">
        {greeting}
        <ItemCount/>
    </div>
  )
}
