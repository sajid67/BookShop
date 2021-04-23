import React, {useContext,useState} from 'react';
// import {context} from '../App';
import { StoreContext } from '../store/StoreContext';
export const Cartjs=()=>
{
    const { currentCart, removeFromCart } = React.useContext(StoreContext);
    React.useEffect(() => {
        console.log(currentCart);
    }, []);
    const Increment=(prod)=>{
        // const arr=[...newProd];
        // prod.quantity=prod.quantity+1;
        // setNewProd(arr);
    }
    const Decrement=(prod)=>{
        // const arr=[...newProd];
        // prod.quantity=prod.quantity-1;
        // setNewProd(arr);
    }
    const Remove=(prod)=>{
        // const arr=newProd.filter(p=> p.id !== prod.id);
        // setNewProd(arr);
    }
    const Total=(prod)=>{
        // return newProd.reduce((prev,next)=>prev+next.price*prev.quantity,0)
    }
    return(
        <table className="table container">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Remove</th>
                <th scope="col">Total</th>

            </tr>
        </thead>
        <tbody>
            {
                currentCart?.map(product => (
                    <tr key={product?.id}>
                        <th scope="row">{product.title}</th>
                        <td><img style={{ width: 100 }} src={product.image} /></td>
                        <td>{product.price}$</td>
                        <td><button className="btn btn-primary" onClick={()=>Increment(product)}>+</button>
                            {parseInt(product.quantity)}
                        <button className="btn btn-primary" onClick={()=>Decrement(product)}>-</button></td>
                        <td><button className="btn btn-primary" onClick={()=> removeFromCart(product)}>x</button></td>
                        <td>{product.quantity * product.price}$</td>
                    </tr>
                ))
            }
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Grand Total: {Total(currentCart)}$</td>
            </tr>

        </tbody>
    </table>
    )
}