//************************************************************ **/
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You'll need to install axios: npm install axios
import '../styles/itemCard.css';
import { Link } from 'react-router-dom';
import UpdateItem from '../components/UpdateItem';

const AdminProducts = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [editingItem, setEditingItem] = useState(null);


  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    const apiUrl = 'https://api.escuelajs.co/api/v1/products';

    axios.get(apiUrl)
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleUpdate = async (itemId, updatedData) => {
    try {
    //   const updatedItem = await updateItem(itemId, updatedData);
    //   setItems(items.map(item => (item.id === itemId ? updatedItem : item)));
    console.log(editingItem);
      setEditingItem(itemId);
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteItem = (itemId) => {
    const deleteUrl = `https://api.escuelajs.co/api/v1/products/${itemId}`;

    axios.delete(deleteUrl)
      .then(() => {
        setItems(items.filter(item => item.id !== itemId));
      })
      .catch((err) => {
        setError(err.message);
      });
  };

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
              <img src={imageURL} alt={item.title} width={160} />
              <h3>{item.title}</h3>
              {/* Display item description if available */}
              {item.description && <p className='item-desc'>{item.description}</p>}
              <p className='item-price'>{item.price}</p>
              {/* Add delete button with onClick event */}
              {editingItem === item.id ? (
               
               <div className='updateItem-form'><UpdateItem
                  itemId={item.id}
                  onUpdate={(itemId, updatedData) => handleUpdate(itemId, updatedData)}
                  onCancel={() => setEditingItem(null)}
                /></div>
              ) : (
              <div className='button-section'>
                
                   {/* <Link to='/admin/form' className='update-button' onClick={() => handleUpdate(item.id)}>Update</Link> */}
                   <button className='update-button' onClick={() => handleUpdate(item.id)}>Update</button>
                    <button className='delete-button' onClick={() => deleteItem(item.id)}>Delete</button>
              </div>)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminProducts;

// // //************************************************************* */


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { updateItem, deleteItem } from '../utils/api'; // Import updateItem and deleteItem functions
// import '../styles/itemCard.css';

// const AdminProducts = () => {
//   const [items, setItems] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = () => {
//     const apiUrl = 'https://api.escuelajs.co/api/v1/products';

//     axios.get(apiUrl)
//       .then((response) => {
//         setItems(response.data);
//       })
//       .catch((err) => {
//         setError(err.message);
//       });
//   };

//   const handleUpdate = async (itemId) => {
//     try {
//       // Implement logic to update item
//       const updatedItem = await updateItem(itemId, {/* Update item data */});
//       // Optionally, update the state to reflect changes
//       // You may fetch updated data again or update the existing item in the state
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleDelete = async (itemId) => {
//     try {
//       await deleteItem(itemId);
//       setItems(items.filter(item => item.id !== itemId));
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   if (error) {
//     return <div>Error fetching data: {error}</div>;
//   }

//   return (
//     <div className='item-page'>
//       <h2>Products</h2>
//       <div className='item-set'>
//         <ul className='Item-list'>
//           {items.map((item) => (
//             <li key={item.id} className='Item-Card'>
//               <img src={item.image} alt={item.title} width={160} />
//               <h3>{item.title}</h3>
//               {item.description && <p className='item-desc'>{item.description}</p>}
//               <p className='item-price'>{item.price}</p>
//               {/* Add update and delete buttons */}

//               <div className='button-section'>

//                     <button className='update-button' onClick={() => handleUpdate(item.id)}>Update</button>
//                     <button className='delete-button' onClick={() => handleDelete(item.id)}>Delete</button>
//               </div>
             
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;
