import React, { useState, useEffect } from 'react';

const Cart = ({ cart, removeFromCart }) => {

    //useState For Quantity And setQuantity

    const [quantities, setQuantities] = useState({});

    // useState For Set TotalQuantity
    
    const [totalQuantity, setTotalQuantity] = useState(0);

    // useState For Set TotalPrice

    const [totalPrice, setTotalPrice] = useState(0);


    // Function For Calculate The Total Quantity and Total Price that added to Cart

    useEffect(() => {
        if (cart && cart.length >= 0) {
            let quantity = 0;
            let price = 0;

            cart.forEach(item => {
                const itemQuantity = quantities[item.id] || 1;
                quantity += itemQuantity;
                price += item.price * itemQuantity;
            });

            setTotalQuantity(quantity);
            setTotalPrice(price);
        }
    }, [cart, quantities]);


    // Function To Decrease the Quantity in Cart [ For (-) Button ]
    
    const decreaseQuantity = (itemId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemId]: Math.max((prevQuantities[itemId] || 1) - 1, 1)
        }));
    };
    
    // Function To Increase the Quantity in Cart [ For (+) Button ]

    const increaseQuantity = (itemId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemId]: (prevQuantities[itemId] || 0) + 1
        }));
    };


    return (
        <div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header bg-black">
                    <div className="offcanvas-title text-white" id="offcanvasRightLabel"><h5 className='text-center'>Your Cart</h5></div>
                    <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                <div className="col-12 text-center color p-0 sticky-top">
                <div className='d-flex justify-content-evenly'><h5>Total Quantity :</h5><h5>{totalQuantity}</h5></div>
                <div className='d-flex justify-content-evenly'><h5>Total Price :</h5><h5>${totalPrice}</h5></div>
                
            </div>
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
                                                <button className='minus' onClick={() => decreaseQuantity(item.id)}>-</button>
                                                <p className='mb-0'>{quantities[item.id] || 1}</p>
                                                <button className='plus' onClick={() => increaseQuantity(item.id)}>+</button>
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
