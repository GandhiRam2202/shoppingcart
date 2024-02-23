import React, { useContext, useState } from 'react';
import Card from './Card';
import Cart from './Cart';
import { myContext } from '../App';

const Home = ({cart,addToCart,removeFromCart}) => {
    const [products] = useContext(myContext)
   

    return (
        <div className="container">
            <div className="row">
                {products.map(product => (
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

export default Home;
