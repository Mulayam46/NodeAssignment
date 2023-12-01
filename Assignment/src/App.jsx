import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './Component/ProductForm';
import ProductList from './Component/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/product');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
fetchProducts();
  }, [reload]);

  const handleReload = () => {
    setReload(!reload);
  };

  return (
    <div>
      <h1>Product App</h1>
      <ProductForm onReload={handleReload} />
      <ProductList products={products} onReload={handleReload} />
    </div>
  );
}

export default App;
