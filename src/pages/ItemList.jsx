// src/components/ItemList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You'll need to install axios: npm install axios
import '../styles/itemCard.css'


const ItemList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

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

  console.log("items : ",items);
  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  return (
    <div>
      <h2>Items List</h2>
      <ul className='Item-list'>
        {items.map((item) => (
          <li key={item.id} className='Item-Card'>
            <img src='https://img.freepik.com/free-photo/close-up-fresh-apple_144627-14640.jpg?t=st=1715448508~exp=1715452108~hmac=dea647ead96572c52da518468b7aff24ca1ddb060532cb4fb78efba53b23c940&w=740' alt={item.title} width={160}/>
            <h3>{item.title}</h3>
            {/* <p className='item-desc'>{item.description}</p> */}
            <p className='item-price'>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
