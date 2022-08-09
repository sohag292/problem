import React, { useState } from 'react';
import Data from '../../fakeData/products.json';
import Product from '../Product/Product';
import Cart from '../cart/Cart';
import './Shop.css'
function Shop() {
    const [products, setProducts]=useState(Data);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product)=>{
       
        const newCart = [...cart, product];
        setCart(newCart);

    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                
                    {
                        products.map((product, index) => <Product key={index} handleAddProduct={handleAddProduct} Product={product}> </Product>)
                    }
               
            </div>
            <div className="cart-container">
                    <Cart cart={cart}></Cart>
            </div>
        </div>
    );
}

export default Shop;