

import React, { useState } from 'react';
import ProductList from './ProductList';

const initialProducts = [
    {id : 0, product : "Basketball" , price : 12 },
    {id : 1, product : "Baseball" , price : 30 },
    {id : 2, product : "Tennis Racquet" , price : 50 }
]

const WithPropsApp = () => {
    const [products, setProducts] = useState(initialProducts)

    const increasePrice = (event) => {
        //Önemli: onclick tanimlanan yerden event gönderilmese bile burada event yakalanabiliyor. Buttonlarin oldugu yerde id tanimlamasi yaptik. simdi burada kullnacagiz.
        const newProducts = [...products]
        // Önemli: Burada 3 nokta kullanmamizin sebebi: Eger ... kullanmasaydik her seferinde render olmayacakti.
        newProducts[event.target.id].price += 1;
        setProducts(newProducts);
        
        
    }

    const decreasePrice = (event) => {
        const newProducts = [...products];
        newProducts[event.target.id].price -= 1;
        setProducts(newProducts);
    }

  return (
    <div>
        <h2>WithPropsApp</h2>
        <ProductList  products = {products} increasePrice = {increasePrice} decreasePrice = {decreasePrice} />
    </div>
  )
}

export default WithPropsApp;