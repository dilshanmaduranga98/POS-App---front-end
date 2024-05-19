import React, { useState, useEffect }from 'react'
import '../style/stock.css'
import axios from 'axios'; 
import UpdateStock from './UpdateStock';

export default function StockMng() {

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [editingItem, setEditingItem] = useState(null);
  
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


      const deleteItem = (itemId) => {
        const deleteUrl = `https://api.escuelajs.co/api/v1/products/${itemId}`;
    
        axios.delete(deleteUrl)
          .then(() => {
            setItems(items.filter(item => item.id !== itemId));
            var itemData = items.find(itema => itema.id === itemId);

            alert(`'${itemData.title}' was succefully delete!`);
            
          })
          .catch((err) => {
            setError(err.message);
          });
      };


      const handleUpdate = async (itemId, updatedData) => {
        try {
        //   const updatedItem = await updateItem(itemId, updatedData);
        //  setItems(items.map(item => (item.id === itemId ? updatedItem : item)));
        console.log(editingItem);
          setEditingItem(itemId);
          var itemData = items.filter(ite,m => item.id === itemId).title;
          alert(`'${itemData}' was succesfully update!`);
        } catch (error) {
          setError(error.message);
        }
      };

console.log(items);



  return (
    <div className='main-stock'>
      <h2>Stock management</h2>
      <p>Manage your stock here</p>
      <div className='stock-table'>
        <table>
            <tr className='table-head'>
                <th>ProductID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actiopn</th>
            </tr>
            {items.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>200</td>
                    {editingItem === item.id ? (
               
                        <div className='updateItem-form'><UpdateStock
                            itemId={item.id}
                            onUpdate={(itemId, updatedData) => handleUpdate(itemId, updatedData)}
                            onCancel={() => setEditingItem(null)}
                            /></div>
                        ) : (
                        <td className='btn-section'>
                    
                        <button className='stock-update'onClick={() => handleUpdate(item.id)}>update</button>
                        <button className='stock-delete' onClick={() => deleteItem(item.id)}>delete</button>
                    </td> 
                    )}
                </tr>
            ))}
        </table>

      </div>
    </div>
  )
}
