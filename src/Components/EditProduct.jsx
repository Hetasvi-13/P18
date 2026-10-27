import React, { useState } from 'react';

function EditProduct({ product, setProduct }) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  function updateProduct(e) {
    e.preventDefault();
    setProduct({ ...product, name, price });
    alert('Product Updated!');
  }

  return (
    <form onSubmit={updateProduct}>
      <h2>Edit Product</h2>

      <input value={name}
        onChange={e => setName(e.target.value)} />

      <input value={price}
        onChange={e => setPrice(e.target.value)} />

      <button type="submit">Update</button>
    </form>
  );
}

export default EditProduct;