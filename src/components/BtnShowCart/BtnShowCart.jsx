import React from 'react'
import { Link } from 'react-router-dom'
export const BtnShowCart = () => {
  return (
    <div>
      <Link to="/cart">
        <button className='btn btn-info bi bi-cart text-white'>
          Ver carrito
        </button>
      </Link>  
    </div>
  )
}
