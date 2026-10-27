import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import EditProduct from './Components/EditProduct';

function App() {
  const [product, setProduct] = useState({
    id: 1,
    name: 'Laptop',
    price: 50000
  });

  return (
    <div>
      <ProductList product={product} />
      <EditProduct product={product} setProduct={setProduct} />
    </div>
  );
}

export default App;