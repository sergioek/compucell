import React, { useEffect, useState } from 'react'
import DataProducts from '../../bd/productos.json'
import { Item } from '../Item/Item'
import { SearchProducts } from '../SearchProducts/SearchProducts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Categories } from '../Categories/Categories';


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

      <Categories/>

      <SearchProducts functionSearch={searchProduct}/>
      < ToastContainer /> 
      <div className='itemList'>
        { 
          products.map((product)=><Item product={product} key={product.id}/>)
        }
      </div>
    </div>
  )
}

