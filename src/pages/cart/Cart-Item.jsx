import React, { useContext } from 'react'
import './cart.css'
import { ShopContext } from '../../context/ShopContext';

export const CartItem = (props) => {
    const {id, productName, price, productImage} =props.data;
    const {addToCart, removeFromCart, cartItems, updateCartItems}=useContext(ShopContext)
  return (
    <div className='cartItem'>
        <img src={productImage} alt=''/>
        <div className='description'>
            <p>
                <b>{productName}</b>
                <p><span>&#8377;</span>{price}</p>
            </p>
            <div className='countHandler'>
              <button onClick={()=>removeFromCart(id)}>-</button>
              <input value={cartItems[id]} onChange={(e)=>updateCartItems(Number(e.target.value), id)} />
              <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}
