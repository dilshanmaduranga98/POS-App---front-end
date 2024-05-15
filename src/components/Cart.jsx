import React, { useEffect, useState, useContext } from 'react'
import '../styles/cart.css'
import { CartContext } from '../context/cartContext';
// import {circle-xmark} from 'react-icons/fa'
import { FaTrashCan } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';

export default function Cart({vis, funct}) {

    const {cart: {items}} = useContext(CartContext);
    // const [visible, setVisible] = useState(true);

    // const handleVisible = () => {
    //     setVisible(!visible);
    //   }

     
    let total=0;
     items.forEach(item => {
        total += item.total;
      });

    //   items.find((it))
    console.log(total);
// var Total  = T;

// var ItemsC = JSON.parse(items);
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
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTflvzRI3JwsFNeDJyskwo9rMNmwcqObAdb39VOFStALg&s' width={50}/>
                    <h5>{item.title}</h5>
                    <h6>${item.price}.00</h6>
                    <p>{item.qut}</p>
                    <button><FaTrashCan/></button>
                </div>
            </li>
            ))}

            <p className='total-cart'>TOTAL : ${total}.00</p>
        </ul>
      </div>
    </div>)}
    </>
  )
}
