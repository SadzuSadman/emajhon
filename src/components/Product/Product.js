import React from 'react';
import './Product.css'
 
const Product = (props) => {
    const {name,img,seller,price,stock}=props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p>by: {seller}</p>
                <p>${price}</p>
                <br />
                <p>Only left in {stock}</p>
                <button onClick={()=>props.handleAddToCart(props.product)} className='main-button'>add to cart</button>
            </div>
             
        </div>
    );
};

export default Product;