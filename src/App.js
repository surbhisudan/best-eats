import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ImageSlider from './components/ImageSlider';
import Foods from './components/Foods';
import CartPage from './components/CartPage';
import HeadlineCard from './components/HeadlinCard';
import Category from './components/Category';
import Footer from './components/Footer';
import Wishlist from './components/Wishlist';

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`Added ${item.name} to the cart!`);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item !== itemToRemove);
    setCart(updatedCart);
  };

  const addToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };

  const removeFromWishlist = (itemToRemove) => {
    const updatedWishlist = wishlist.filter((item) => item !== itemToRemove);
    setWishlist(updatedWishlist);
  };

  // Load cart and wishlist items from local storage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    const storedWishlistItems = localStorage.getItem('wishlistItems');

    if (storedCartItems) {
      setCart(JSON.parse(storedCartItems));
    }

    if (storedWishlistItems) {
      setWishlist(JSON.parse(storedWishlistItems));
    }
  }, []);

  // Save cart and wishlist items to local storage whenever there's a change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <>
      <Router>
        {/* Define the routes */}
        <Routes>
          <Route path="/" element={<>
            <Nav cartItems={cart} />
            <ImageSlider />
            <HeadlineCard />
            <Foods addToCart={addToCart} addToWishlist={addToWishlist} />
            <Category />
            <Footer />
          </>} />
          <Route path="/cart" element={<CartPage cartItems={cart} removeFromCart={removeFromCart} />} />
          <Route
            path="/wishlist" element={<Wishlist wishlistItems={wishlist} removeFromWishlist={removeFromWishlist}
              addToCart={addToCart} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
