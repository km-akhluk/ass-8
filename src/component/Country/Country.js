import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Single from '../Single/Single';
import './Country.css'
const Country = () => {
    const [countries, setCountries] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./countries.json')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);
    const handleButton = single => {
        const newCart = [...cart, single];
        setCart(newCart);
    }

    return (
        <div className="country-container">
            <div className="main-container row ms-5 mb-5">
                {
                    countries.map(country =>
                        <Single
                            handleButton={handleButton}
                            key={country.key}
                            single={country}></Single>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Country;