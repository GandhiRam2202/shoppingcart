import React, { useState } from 'react';

const Cart = ({ cart, removeFromCart }) => {
    const [quantities, setQuantities] = useState({});

    const quantityMinus = (itemId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemId]: Math.max((prevQuantities[itemId] || 1) - 1, 1)
        }));
    };

    const quantityPlus = (itemId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemId]: (prevQuantities[itemId] || 0) + 1
        }));
    };

    return (
        <div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header bg-black">
                    <h5 className="offcanvas-title text-white" id="offcanvasRightLabel">Your Cart</h5>
                    <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="row">
                        {cart && cart.map(item => (
                            <div key={item.id}>
                                <div className='col-sm-12 d-flex color mt-3'>
                                    <div className='col-4 border'>
                                        <img src={item.thumbnail} width='100%' alt="" className='images' />
                                    </div>
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-evenly">
                                            <div className="col-4 text-center">
                                                <h5>{item.title}</h5>
                                            </div>
                                            <div className="col-4 text-center d-flex justify-content-end">
                                                <h5>${item.price}</h5>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex justify-content-evenly">
                                            <h5>Brand:{item.brand}</h5>
                                            <div className='d-flex'>
                                                <button className='minus' onClick={() => quantityMinus(item.id)}>-</button>
                                                <p className='mb-0'>{quantities[item.id] || 1}</p>
                                                <button className='plus' onClick={() => quantityPlus(item.id)}>+</button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-evenly">
                                            <div className="col-4 text-center">
                                                <h5>Ratings:{item.rating}</h5>
                                            </div>
                                            <div className="col-4 text-center justify-content-end">
                                                <h5><button className='removeFromCart fw-bolder' onClick={() => removeFromCart(item)}>Remove</button></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 d-flex justify-content-evenly text-center color">
                                    <div><h5>SUBTOTAL :</h5></div>
                                    <div><h5>${item.price * (quantities[item.id] || 1)}</h5></div>
                                </div>
                                <div className="col-12 d-flex justify-content-evenly text-center color">
                                    <div><h5>Shipping :</h5></div>
                                    <div><h5>Free</h5></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
