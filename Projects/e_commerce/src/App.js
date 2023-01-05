import React, { useState, useEffect } from 'react';

//backend API for products (creatiing, deleteing, selling...):
import { commerce } from './lib/commerce';

import { Products, Navbar } from "./components";

const App = () => {

  const [products, setProducts] = useState([])
  //addds card as empty obj:
  const [cart, setCart] = useState({});

  //gets products from API 
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  //gets cart items from API
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  //adds products to cart
  const handleAddtoCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item)
  }

  //show products on page:
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