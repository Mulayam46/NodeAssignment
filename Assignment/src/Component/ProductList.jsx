import React from 'react';
import axios from 'axios';

const ProductList = ({ products, onReload }) => {
  
  let deletedata=(id)=>{
    axios.delete(`http://localhost:3000/product/${id}`)
}
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.category}{' '}
            <button onClick={()=>{deletedata(product.id)}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
