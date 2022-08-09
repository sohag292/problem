import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Proudct.css'
import { Link } from 'react-router-dom';
function Product(props) {
    
    const{img, name, seller, price, stock, key}= props.Product;
    console.log(name);
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product'><Link to={"/Product/"+key}>{name}</Link></h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock}left in stock - order soon</small></p>
                <button className='main-button' onClick={()=>props.handleAddProduct(props.Product)}> <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div> 
        </div>
    );
}

export default Product;