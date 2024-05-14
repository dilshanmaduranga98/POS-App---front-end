import React, { useState } from 'react';
import '../styles/updateForm.css'

const UpdateItem = ({ itemId, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    // Define form fields and their initial values
    // You may need to adjust these based on your item data structure
    name: '',
    description: '',
    price: ''
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onUpdate function with updated data and item ID
    onUpdate(itemId, formData);
  };

  return (
    <div className='main-Form'>

        <div className='update-form-sec'>
            <h2>Update Item - ID : {itemId}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="price">Price:</label>
                <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} />
                </div>
                <div className='updtae-btn-section'>
                <button className='update-formbtn btn' type="submit">Update</button>
                <button className='cancle-formbtn btn' type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default UpdateItem;
