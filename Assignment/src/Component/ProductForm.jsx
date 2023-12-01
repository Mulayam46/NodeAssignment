import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onReload }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    imageUrl: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/product', formData);
      setFormData({ name: '', category: '', imageUrl: '', description: '' });
      onReload();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <br />
        <label>Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} required />
        <br />
        <label>Image URL:</label>
        <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
        <br />
        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;