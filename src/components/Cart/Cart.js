import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const totalprice=cart.reduce((total,prd)=>total+prd.price,0);
    let shippingcharges=0;
    if(totalprice>400){
        shippingcharges=0;
    }
    else if(totalprice>250){
        shippingcharges=4.99;
    }
    else if(totalprice>0){
        shippingcharges=12.99;
    }

    const tax=(totalprice*0.1).toFixed(2);
    const taxprice=parseFloat(tax); //Number(tax);
    return (
        <div>
            <h4>Order summary</h4>
            <p>Items ordered:{cart.length} </p>
            <p>Product price:{totalprice}</p>
            <p>Shipping charges: {shippingcharges}</p>
            <p>Tax: {tax}</p>
            <p>Total price: {totalprice+shippingcharges+taxprice}</p>
        </div>
    );
};

export default Cart;