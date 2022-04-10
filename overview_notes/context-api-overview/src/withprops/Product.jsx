
import React from 'react'

const Product = ({product}) => {
  return (
    <div>
        <h3>Product</h3>
        <p>{product.product} </p>
        <p>{product.price} </p>
    </div>
  )
}

export default Product