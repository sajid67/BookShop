import React, {useContext} from 'react';
// import {context} from '../App';

import { StoreContext } from '../store/StoreContext';

export const Home=()=>{
    // const[newProd]=useContext(context);
    const { currentProducts } = React.useContext(StoreContext);
    return(
        <>
            {
                currentProducts?.map((p, index)=><div key={index}><img src={p.image} alt=""/></div>)
            }
        </>
    )
}