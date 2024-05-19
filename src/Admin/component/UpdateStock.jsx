import React, { useState } from 'react';
import '../style/updateStock.css'


const UpdateStock = ({ itemId, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    // Define form fields and their initial values
    // You may need to adjust these based on your item data structure
    name: '',
    description: '',
    price: '',
    quntity:'',
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
            <h3>Update stock - item ID : {itemId}</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="stock">stock:</label>
                    <input type='number' id="stock" name="stock" value={formData.quntity} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type='number' id="price" name="price" value={formData.price} onChange={handleChange} />
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

export default UpdateStock;
