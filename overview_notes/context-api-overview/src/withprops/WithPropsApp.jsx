

import React, { useState } from 'react';
import ProductList from './ProductList';

const initialProducts = [
    {id : 0, product : "Basketball" , price : 12 },
    {id : 1, product : "Baseball" , price : 30 },
    {id : 2, product : "Tennis Racquet" , price : 50 }
]

const WithPropsApp = () => {
    const [products, setProducts] = useState(initialProducts)
  return (
    <div>
        <h2>WithPropsApp</h2>
        <ProductList  products = {products} />
    </div>
  )
}

export default WithPropsApp;