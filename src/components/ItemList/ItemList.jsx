import React, { useEffect, useState } from 'react'
import DataProducts from '../../bd/productos.json'
import { Item } from '../Item/Item'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
export const ItemList = () => {
  const [products,setProductos] = useState([])
  const [search,setSearch] = useState('')

  const extractData = () =>{
   return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(DataProducts)
        reject('Error al cargar los datos de productos')
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


  const filterProduct = (valueSearch) =>{
      let filter;
      if(valueSearch.length >0){
        filter = DataProducts.filter((products)=>products.description.includes(valueSearch.toString().toLowerCase())) 
      }else{
        filter = DataProducts
      }
    
      setProductos(filter)
  }

  const searchProduct = (event) =>{
      setSearch(event.target.value)
      setTimeout(() => {
         filterProduct(search)
      }, 2000);
     
  }
 

  return (
    <div>
      <div className='titleList'>
        <h2>Nuestros productos</h2>
      </div>

      <div className='container mb-5'>
      <Form className="d-flex">
          <i className="bi bi-search icono-input"></i>
          <Form.Control type="search" placeholder="Ingrese un texto para buscar un producto" className="me-2 bi search" aria-label="Search"  onChange={searchProduct}/>
        </Form>
      </div>

      <div className='itemList'>
        {
          products.map((product)=><Item product={product} key={product.id}/>)
        }
      </div>
    </div>
  )
}

