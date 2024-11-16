import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/productSlice';
import Product from './Product';

function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  const { type: category } = useSelector((state) => state.category);

  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (category === 'all') {
      setItems(products);
    } else {
      const filteredItems = products.filter((product) => product.category === category);
      setItems(filteredItems);
    }
  }, [category, products]);

  // Handling different statuses for better UX
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>There was an error loading the products. Please try again later.</div>;
  }

  return (
    <div className="flex justify-center text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.length > 0 ? (
          items.map((product) => <Product key={product.id} {...product} />)
        ) : (
          <div>No products found for this category.</div>
        )}
      </div>
    </div>
  );
}

export default Products;
