import React from 'react';

const Cart = (props) => {
    const cart = props.cart;    
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;        
    }

    let shipping= 0;
    if (total > 30) {
        shipping = 0;
    } else if( total > 15){
        shipping = 4.99;
    } else{
        shipping = 12.99;
    }
    const tax = total/10;
    const gradTotal = total + shipping + tax;
    const formatNumber = num => {
        const precission =  num.toFixed(2);
        return Number(precission);
    }

    return (
        <div>
            <h3>Order summary</h3>
            <p>Items order: {cart.length}</p>
            <p>Shipping And Handling: {formatNumber(shipping)}</p>
            <p>Total before tax: {formatNumber(total)}</p>
            <p>Estimated tax: {formatNumber(tax)}</p>
            <p>Grand Total : {formatNumber(gradTotal)}</p>
        </div>
    );
};

export default Cart;