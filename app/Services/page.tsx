// app/Services/page.tsx
import React from 'react';

const fetchProduct = async () => {
  const res = await fetch('https://dummyjson.com/products/1');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const Page = async () => {
  const product = await fetchProduct();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Discount Percentage:</strong> {product.discountPercentage}%</p>
      <p><strong>Rating:</strong> {product.rating} / 5</p>
      <p><strong>Stock:</strong> {product.stock} units</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <img src={product.thumbnail} alt={product.title} style={{ width: '150px', height: '150px' }} />
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        {product.images.map((image:any, index:any) => (
          <img key={index} src={image} alt={`${product.title} ${index}`} style={{ width: '100px', height: '100px' }} />
        ))}
      </div>
    </div>
  );
};

export default Page;
