import React, { useState } from 'react';
import { addItem } from '../utils/api';
import '../styles/itemForm.css'; // Import CSS file for styling

const ItemForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    image: null
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({
        ...formData,
        image: e.target.files[0]
      });
    } else {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newItem = await addItem(formData);
      onAdd(newItem);
      setFormData({
        id: '',
        name: '',
        description: '',
        price: '',
        image: null
      });
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
  <>
  <h3>Add new item</h3>
    <form onSubmit={handleSubmit}>

        <div className='inpiut-feilds'>
            <div className = "image-input">
                {/* Custom-styled image upload button */}
                <label className="custom-file-upload">
                    <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    />
                    Upload Image
                </label>
            </div>

            <div className = "text-inputs"> 
                <input
                    type="text"
                    placeholder="Enter item name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Enter item description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Enter item price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />

            </div>

        </div>


      <div className = "button-inputs">
      <button type="submit">Add Item</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>



    </form>
    </>
  );
};

export default ItemForm;
