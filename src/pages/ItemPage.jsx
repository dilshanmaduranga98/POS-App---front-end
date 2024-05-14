import React, { useState, useEffect } from 'react';
import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';
import { getItems, deleteItem } from '../utils/api';

const ItemPage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsData = await getItems();
        setItems(itemsData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchItems();
  }, []);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Item Management</h1>
      <ItemForm onAdd={handleAddItem} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ItemList items={items} onDelete={handleDeleteItem} />
    </div>
  );
};

export default ItemPage;
