import React, { useContext } from 'react';
import { myContext } from '../App';
import Card from './Card';
import Cart from './Cart';

const Airpods = ({ cart, addToCart, removeFromCart }) => {

    // Accessing Object Using useContext from App.jsx

    const [product, setProduct] = useContext(myContext);

    // Filtering Only Object that have Category in Airpods

    const airpods = product.filter((item) => item.category === 'airpods');

    return (
        <div className='container'>
            <div className="row">
                {airpods.map((product) => (
                    <div className="col-12 col-md-6 col-lg-3 mt-5" key={product.id}>

    {/* Sending Mapped data to Card Component */}


                        <Card
                            product={product}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            isAddedToCart={cart.some(item => item.id === product.id)}
                        />
                    </div>
                ))}
            </div>

    {/* Sending data and removeFromCart function to Cart Component */}


            <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
    );
};

export default Airpods;
