import React, { useState, useEffect } from 'react';

//Adds backend API for products (creatiing, deleteing, selling...): xxxxxxxxxxxx 1 49 50 make comments retrospectivly 
import { commerce } from './lib/commerce';
//Imports from "components" folder:
import { Products, Navbar, Cart, Checkout } from "./components";
//Router functionality, to traverse pages:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  //Objects (products, cart):
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({});

  //Functions - gets items from API (products, cart) and sets its value:
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  //Functions - updates cart:
  const handleAddtoCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity })
    setCart(item)
  }

  const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId)
    setCart(item)
  }

  const handleEmptyCart = async () => {
    const item = await commerce.cart.empty()
    setCart(item)
  }

  //Shows products on page:
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    //wraps entire application into 'Router':
    //Navbar, Products, Cart - imported from 'components' 

    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        {/* "Routes" shows 'products' or 'cart' - deponds on 'Route path' */}
        <Routes>
          <Route path="/" element={<Products products={products}
            //property={function}:
            onAddToCart={handleAddtoCart} />} />
          <Route path="/cart" element={<Cart cart={cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

      </div>
    </Router >

  )
}

export default App