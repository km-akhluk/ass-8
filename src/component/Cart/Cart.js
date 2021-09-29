import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = '';
    for (const single of cart) {
        total = total + single.name + ",";
    }
    let popu = 0;
    for (const single of cart) {
        popu = popu + single.population;
    }
    return (
        <div className="cart rounded-3 ">
            <h2 className="text-center text-white">Selected Country</h2>
            <h5 className="text-left text-info">Select : <span className="text-white">{props.cart.length}</span></h5>
            <h5 className="text-left text-info">Total Country :<span className="text-white"> {total}</span></h5>
            <h5 className="text-left text-info">Total Population :<span className="text-white"> {popu} m</span></h5>
        </div>
    );
};

export default Cart;