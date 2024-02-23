import React, { useContext, useState } from 'react';
import { myContext } from '../App';
import Card from './Card';
import Cart from './Cart';

const Airpods = ({cart,addToCart,removeFromCart}) => {
    const [product, setProduct] = useContext(myContext);
    

    const airpods = product.filter((item) => item.category === 'airpods');

    return (
        <div className='container'>
            <div className="row">
                {airpods.map((product) => (
                    <div className="col-12 col-md-6 col-lg-3 mt-5" key={product.id}>
                        <Card
                            product={product}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            isAddedToCart={cart.some(item => item.id === product.id)}
                        />
                    </div>
                ))}
            </div>
            <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
    );
};

export default Airpods;
