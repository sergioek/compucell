import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetails = () => {
  return (
        <section className='itemDetails'>
            <article className='itemDetails__image'>
                <img src="../../../public/img/products/mouse-genius.jfif" alt="" />
            </article>

            <article className='itemDetails__details'>
                <div className='text'>
                    <h2>Microprocesador AMD RYZEN 5600X</h2>
                    <p>MICROPROCESADOR AMD RYZEN 5 5600X AM4 SIN VIDEO. CON COOLER - CARACTERÍSTICAS GENERALES ART 100-100000065BOX MARCA AMD MODELO 100-100000065BOX TÉCNICAS GARANTÍA 3 AÑOS CANTIDAD DE NÚCLEOS 6 NÚCLEOS / 12 THREADS ZÓCALO AM4 CACHÉ 36 MB VELOCIDAD DE RELOJ 4.5 GHZ TECNOLOGÍA DE MEMORIA DDR4 SEGMENTO DE PRODUCTO GAMING VER MÁS VER MENOS</p>
                    <strong>$100,00</strong>
                </div>

                <div className='options'>
                    <div className='addToCart'>
                        <ItemCount/>
                        
                        <div className='buttonAddToCart'>
                            <button className='bi bi-cart'> Agregar al carrito</button>
                        </div>
                        
                    </div>

            
                    <div className='buy'>
                        <h6>Medios de Pago:</h6>
                        <img src="../../../public/img/mediosPago.png" alt="" srcset="" />
                    </div>
                </div>

            </article>
        </section>
  )
}
