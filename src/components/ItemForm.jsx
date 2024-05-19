import React, { useState } from 'react';
import { addItem } from '../utils/api';
import '../styles/itemForm.css'; // Import CSS file for styling

const ItemForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    stock:'',
    image: null
  });
  const [error, setError] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const handleChange = (e) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (e.target.name === 'image') {
      setFormData({
        ...formData,
        image: e.target.files[0]
        
      });

      reader.onload = () => {
        setImageSrc(reader.result);
    };

    reader.readAsDataURL(file);
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
        stock:'',
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
                {imageSrc ?imageSrc && <img src={imageSrc} alt="Uploaded" width={150}/> : (<label className="custom-file-upload">
                    <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    />
                    Upload Image
                </label>)}
                
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

                <input
                    type="text"
                    placeholder="Enter item stock"
                    name="stock"
                    value={formData.stock}
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
