import React, { useEffect, useState } from 'react'
import productos from '../../bd/productos.json'
import { Item } from '../Item/Item'

export const ItemList = () => {
  const [products,setProductos] = useState([])
 
  const extractData = () =>{
    new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(products)
        reject('Error')
      },2000);
    })
  }

  useEffect(()=>{
    extractData()
      .then((response)=>{
        setProductos(response)
      })
      .catch((error)=>{
        alert(error)
      })
  },[])

  return (
    <div className='itemList'>
     <h2 className='text-primary'>Nuestros Productos</h2>
      
 
     
    </div>
  )
}

