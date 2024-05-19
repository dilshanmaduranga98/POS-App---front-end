// src/components/ItemList.js

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'; // You'll need to install axios: npm install axios
import '../styles/itemCard.css'
import { CartContext } from '../context/cartContext';



const ItemList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(0);


  const {cart, dispatch} = useContext(CartContext);


  useEffect(() => {
    // Replace with your actual API endpoint
    const apiUrl = 'https://api.escuelajs.co/api/v1/products';

    axios.get(apiUrl)
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });

  }, []);


 


 


  // add to cart function
  // useEffect(() => {
    
  //   localStorage.setItem('Items',JSON.stringify(cartItem));
  //   // await setTimeout(1000);
    
  // },[cartItem]);

  const increaseQty = () => {
    setQuantity(quantity+1);
  }

  const decreaseQty = () => {
    if(quantity>0)
      {
        setQuantity(quantity-1);
      }
  }

  const addCart = (ID, title,price, quantity) => {

    const newCartItem = {id:ID , title: title, price: price, qut: quantity};

    dispatch({type: "ADD_ITEM_TO_CART", payload: newCartItem});

  }




    if (error) {
      return <div>Error fetching data: {error}</div>;
    }
  var imageURL = "https://imgs.search.brave.com/YsC67wFahtbfth3TDHiQnD8Xg_uMmgxXwCrDbazuqoo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ndy5h/bGlwYXlvYmplY3Rz/LmNvbS96b3MvYW50/ZmluY2RuL1pIcmNk/TFBydk4vZW1wdHku/c3Zn.svg"
  return (
    <div className='item-page'>
      
      <h2>Products</h2>
      <div className='item-set'>
        <ul className='Item-list'>
          {items.map((item) => (
            <li key={item.id} className='Item-Card'>
              <img src={imageURL} alt={item.title} width={160}/>
              <div className='title-u-product'> 
                <h3>{item.title}</h3>
              </div>
              
              <div className='description-u-product'>
                <p className='item-desc'>{item.description}</p>
              </div>
              
              <div className='price-u-product'>
                <p className='item-price'>${item.price}.00</p>
              </div>
              <div className='btn-u-product'>
                <button className='add-to-cart-btn' onClick={() => addCart(item.id, item.title, item.price, 1)}>Add To Cart</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemList;









