import React, {useState} from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
const Cart = ({cart, setCart, handleChange}) => {
  const [price, setPrice] = useState(0);

  const handlePrice = ()=>{
    let ans = 0;
    cart.map((pop)=>{
      ans += pop.amount * pop.price
    })
    setPrice(ans);
  }
  const handleRemove = (id) =>{
    const arr = cart.filter((pop) => pop.id !== id);
    setCart(arr);
    handlePrice();
  }
  useEffect(()=>{
    handlePrice();
  })
  return (
    <div>
      {cart.length === 0 && <div>No item in cart</div>}
      {
        cart?.map((pop)=>(
          <div className="cartdiv">
          <div key={pop.id} className="cart">
            <div className="cartimg">
            <img src={pop.cartimg} alt="" className='cartimg' />
            </div>
            <div className="cartothers">
            <div className="poptitle">
            <p className='carttitle'>{pop.title}</p>
            </div>
            <div className='addmore'>
              <button className='plus' onClick={() => handleChange(pop +1)}>+</button>
              <p className='popamt'>{pop.amount}</p>
              <button className='minus' onClick={() => handleChange(pop -1)}>-</button>
            </div>
            <div className='cartprice'>
              <span>{pop.price}</span>
              <button onClick={() => handleRemove(pop.id)}>Remove</button>
            </div>
            </div>
          </div>
          </div>
          
          ))
        }
        <div className="bottom">
        <div className="carttotal">
        <span>Total of cart</span>
        <span>$ {price}</span>
        </div>
        <Link className="checkout">
          <button>Checkout</button>
        </Link>
        </div>
    </div>
  )
}

export default Cart
