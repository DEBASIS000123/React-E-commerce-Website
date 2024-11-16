import React, { useEffect, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';  // Make sure HashRouter is used here
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // No extra imports for BrowserRouter if using HashRouter
import Home from './components/Home';
import Navbar from './components/Navbar';
import { store } from './App/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Carts from './components/Carts';
import Modal from './components/Modal';
import About from './components/About';
import { calculateTotals } from './features/cartSlice';
import SingleProduct from './components/SingleProduct';

function App() {
  const {cartItems} = useSelector((store) => store.cart);
  const {message} = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateTotals());  
  }, [cartItems]);

  const {isOpen} = useSelector((store) => store.modal);
  return (
    <Provider store={store}>
      <Router> {/* Use HashRouter here */}
        <Navbar />
        {isOpen && <Modal message={message}/>}
        <Routes>
          <Route path='/ReactJS-E-commerce' element={<Home/>} />
          <Route path="/ReactJS-E-commerce/cart" element={<Carts/>}/>
          <Route path="/ReactJS-E-commerce/about" element={<About/>}/>
          <Route path="/ReactJS-E-commerce/product/:id" element={<SingleProduct/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
