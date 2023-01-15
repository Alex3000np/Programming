import React, { useState, useEffect } from 'react';

//Adds backend API for products (creatiing, deleteing, selling...):
import { commerce } from './lib/commerce';
// Imports from "components" folder:
import { Products, Navbar, Cart } from "./components";
// Router functionality, to traverse pages:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => { //-------1.27.30

  //Objects (products, cart):
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({});

  // functions - gets items from API (products, cart) and sets its value:
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  // function - adds products to cart
  const handleAddtoCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item)
  }

  //Shows products on page:
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  //test - products, cart, cart deletion. (Do delete, once not needed):
  //console.log(products);
  //console.log(cart);
  //commerce.cart.delete().

  return (
    //wraps entire application into 'Router':
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />  {/* Navbar imported from 'components' */}

        {/* "Routes" shows 'products' or 'cart' - deponds on 'Route path' */}
        <Routes>
          <Route path="/" element={<Products products={products} onAddToCart={handleAddtoCart} />} />  {/* Products imported from 'components' */}
          <Route path="/cart" element={<Cart cart={cart} />} />  {/* Cart imported from 'components' */}
        </Routes>
      </div>
    </Router>

  )
}

export default App