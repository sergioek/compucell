import { useState } from "react"
import { CartWidget } from '../CartWidget/CartWidget';

export const ItemCount = () => {
    
    const stock = 0
    const [Mount,setMount] = useState(stock>=1 ? 1 : 0)

    const restarCantidad = () =>{
        Mount>stock ? setMount(Mount-1) : setMount(1)
       
    }

    const sumarCantidad = () =>{
        Mount<stock ? setMount(Mount+1) : alert('No se puede sobrpasar el stock')
    }
    return (
        <div className="container">
           
                <fieldset style={{display:'flex',gap:'10px'}}>
                    <button className="btn btn-secondary" onClick={restarCantidad}>-</button>
                   <input type="number" name="" id="" className="form-control" style={{width:'80px',textAlign:'center'}} disabled value={Mount} max={stock}/> 
                   <button className="btn btn-secondary" onClick={sumarCantidad}>+</button>
                </fieldset>

                <button className="btn btn-primary">Agregar+</button>
            
            
        
        </div>
    );
}

