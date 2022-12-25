import React from 'react'

export const Item = (props) => {
  const {id,name,mark,model,price,image} = props.product
  const number =1
  return (
    <div className='item' key={id}>
        <img src={"../../../public/img/products/"+image} alt={name} />
        <div className='item__text'>
             <h3>{name + ' ' + mark + ' '+ model}</h3>
            <strong>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)}</strong>
            <button>+Info</button>
        </div>
    </div>
  )
}
