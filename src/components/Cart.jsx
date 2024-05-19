import React, { useEffect, useState, useContext } from 'react'
import '../styles/cart.css'
import { CartContext } from '../context/cartContext';
import { FaTrashCan } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';
import { useNavigate } from 'react-router';


export default function Cart({vis, funct}) {

    const {cart: {items}, dispatch} = useContext(CartContext);

    function calcTotal() {
        let total = 0;

        items.forEach(item => {
            total += (item.price * item.qut);
        })
        console.log(total)
        return total;
    }


  


    function handleDelete(itemId) {
        console.log('clicked')
        dispatch({type: "DELETE_ITEM", payload: itemId});
    }


     
    let total=0;
     items.forEach(item => {
        total += item.total;
      });

  

      const navigate = useNavigate();

// Redirect to checkout page
const handleCheckout = () => {
    navigate('/checkout', { state: items });
    console.log(items);
};


  return (
    <>
    {vis && (<div className='cart-main'>
        <div className='cart-close' onClick={funct}>
            <FaXmark/>
      </div>
      <h2>Cart</h2>
      
      
        <div className='cart-items-continer'>
            <ul>
                {items.map((item) => (   
                <li key={item.id}>
                    <div>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTflvzRI3JwsFNeDJyskwo9rMNmwcqObAdb39VOFStALg&s' width={40}/>
                        <h5>{item.title}</h5>
                        <h6>${item.price}.00</h6>
                        <p>{item.qut}</p>
                        <button onClick={() => handleDelete(item.id)}><FaTrashCan/></button>
                    </div>
                </li>
                ))}

                
                
            </ul>
           
        </div>

        <div className='total-checkout'>
            <p className='total-cart'>TOTAL : ${calcTotal()}.00</p>
            <button onClick={handleCheckout}> Checkout</button>
        </div>


    </div>)}
    </>
  )
}
