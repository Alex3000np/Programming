import React, { useState, useEffect } from 'react';

//backend API for products (creatiing, deleteing, selling...):
import { commerce } from './lib/commerce';

import { Products, Navbar } from "./components";

const App = () => {

  const [products, setProducts] = useState([])

  //func gets products from API 
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  //show products on page:
  useEffect(() => {
    fetchProducts();
  }, []);

  //test
  console.log(products);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  )
}

export default App