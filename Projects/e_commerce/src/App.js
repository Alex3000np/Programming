import React, { useState, useEffect } from 'react';

//backend API for products (creatiing, deleteing, selling...):
import { commerce } from './lib/commerce';

import { Products, Navbar } from "./components";

const App = () => {

  //Objects (products, cart):
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({});

  //fn gets items from API (products, cart):
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  //fn adds products to cart
  const handleAddtoCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item)
  }

  //Shows products on page:
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  //test products, cart. (delete):
  //console.log(products);
  console.log(cart);
  //commerce.cart.delete().

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleAddtoCart} />
    </div>
  )
}

export default App