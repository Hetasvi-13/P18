import React, { useState } from 'react';
import EditProduct from './EditProduct';

function ProductList() {
  const [product, setProduct] = useState({
    id: 1,
    name: 'Laptop',
    price: 50000
  });

  return (
    <div>
      <h2>Product List</h2>
      <p>{product.name} - ₹{product.price}</p>

      <EditProduct
        product={product}
        setProduct={setProduct}
      />
    </div>
  );
}

export default ProductList;