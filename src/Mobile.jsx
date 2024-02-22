import React, { useContext, useState } from 'react';
import { myContext } from './App';
import Cart from './Component/Cart';
import Card from './Component/Card';

const Mobile = () => {
  const[product,setProduct]=useContext(myContext)
  const mobile = product.filter((item)=> item.category === 'mobile') 
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
      setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
      setCart(cart.filter(item => item.id !== product.id));
  };
    return (
      <div className='container'>
      <div className="row">
        {mobile.map((product) => (
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
export default Mobile;