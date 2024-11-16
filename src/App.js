import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { store } from './App/store';
import { calculateTotals } from './features/cartSlice';

import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Home from './components/Home';
import Carts from './components/Carts';
import About from './components/About';
import SingleProduct from './components/SingleProduct';

function App() {
  const dispatch = useDispatch();
  
  // Access cart items and modal state from Redux store
  const { cartItems } = useSelector((store) => store.cart);
  const { message, isOpen } = useSelector((store) => store.modal);

  // Effect to calculate totals whenever cartItems change
  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch, cartItems]); // Include dispatch and cartItems as dependencies

  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* Navbar */}
        <Navbar />
        
        {/* Modal */}
        {isOpen && <Modal message={message} />}
        
        {/* Routes */}
        <Routes>
          <Route path='/ReactJS-E-commerce' element={<Home />} />
          <Route path='/ReactJS-E-commerce/cart' element={<Carts />} />
          <Route path='/ReactJS-E-commerce/about' element={<About />} />
          <Route path='/ReactJS-E-commerce/product/:id' element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
