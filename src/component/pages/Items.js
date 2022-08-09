import React from 'react'
import { useParams } from 'react-router-dom'
import fakeData from '../../fakeData/products.json'
import Product from '../Product/Product';
export default function Items(props) {
    const {productkey} = useParams()
    console.log(productkey);
    const product = fakeData.find(pd => pd.key === productkey);
    

  return (
    <div>
        <h1>{productkey} This is items</h1>
        
    </div>
  )
}
