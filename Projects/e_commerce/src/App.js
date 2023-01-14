import React, { useState, useEffect } from 'react';

//Adds backend API for products (creatiing, deleteing, selling...):
import { commerce } from './lib/commerce';
// Imports from "components" folder:
import { Products, Navbar, Cart } from "./components";

const App = () => {

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
    <div>
      {/* Navbar imported from 'components' */}
      <Navbar totalItems={cart.total_items} />
      
      {/* Products imported from 'components' */}
      {/* <Products products={products} onAddToCart={handleAddtoCart} /> */}
      
      {/* Cart imported from 'components' */}
      <Cart cart={cart} />
    </div>
  )
}

export default App