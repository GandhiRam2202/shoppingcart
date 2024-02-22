import React from 'react';

const Card = ({ product, addToCart, removeFromCart, isAddedToCart }) => {
    return (
        <div className="card h-100">
            <div className="card-img">
                <div className="nav-brand position-absolute right-0 bg-black rounded text-white fw-bolder">%{product.discountPercentage}Off</div>
                <img width='100%' src={product.thumbnail} alt="" />
            </div>
            <div className="card-text text-center p-4">
                <div className="card-text fw-bolder">{product.title}</div>
                <div className="card-text text-center">Price: ${product.price}</div>
                <div className="card-text text-center text-secondary">Brand: {product.brand}</div>
                <div className="card-text text-center text-secondary">Rating: {product.rating}</div>
                <div className='d-flex justify-content-center'>
                    {isAddedToCart ?
                        <button className='addTocart border bg-danger text-white fw-bolder' onClick={() => removeFromCart(product)}>Remove From Cart</button> :
                        <button className='addTocart border bg-primary text-white fw-bolder' onClick={() => addToCart(product)}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;
