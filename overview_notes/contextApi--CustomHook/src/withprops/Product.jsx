
import React from 'react'

const Product = ({product, increasePrice, decreasePrice}) => {
  return (
    <div>
        <h3>Product</h3>
        <p>{product.product} </p>
        <p>{product.price} $ </p>
        <button id={product.id} onClick = {increasePrice} >Increase</button>
        <button id={product.id} onClick = {decreasePrice} >decreasePrice</button>
    </div>
  )
}

export default Product;

// ctrl d ile ayni anda birden cok degisiklik