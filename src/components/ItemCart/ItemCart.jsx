import React from 'react'

export const ItemCart = ({id,name,mark,model,count,price,image}) => {
  return (
    <div className="product">
      <i className="btn bi bi-trash3 text-danger mt-3"></i>
      <img src={`/img/products/${image}`} alt={name} />
      <h5>{name + " " + mark + " " + model}</h5>
        <div className='unit'>
            <label >Unid:</label>
            <input type="number" className="form-control mb-2" />
       </div>

      <strong>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price * count)}
      </strong>
    </div>
  );
}
