import React from 'react';
// import {context} from '../App';

import { StoreContext } from '../store/StoreContext';

export const Products = () => {
  const { currentProducts, addToCart } = React.useContext(StoreContext);
  // const [prod,newProd,setNewProd,addtocart]=useContext(context)
    React.useEffect(() => {
      console.log('Products');
      console.log(currentProducts);
    }, []);
      return (
        <>          
        <div className="border border-secondary container mt-4 mb-4">
        <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {
          currentProducts?.map((p, index)=>(
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div key={index} className="card" style={{width:270,paddingTop:2,paddingTop:2}}>
                  <img src={p.image} className="card-img-top h-100 w-100" alt={p?.id}/>
                     <div className="card-body">
                         <h5 className="card-title">{p.title}</h5>
                         <p className="card-text">${p.price}</p>
                         <p className="card-text">{p?.id}</p>
                         <button className="btn btn-primary" onClick={() => {
                            addToCart(p);
                            console.log(p);
                           }}>Add to cart</button>
                     </div>
                </div>
             </div>
            ))
        }
        </div>
        </div>
        </div>
      </>
      );
}