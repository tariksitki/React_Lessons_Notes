
import { useContext } from 'react';
import {ProductContext} from "./ProductContext";

const Product = ({product}) => {
    const {increasePrice, decreasePrice} = useContext(ProductContext);

  return (
    <div>
        <h1>Product</h1>
        <h3>{product.product}</h3>
        <h3>{product.price}</h3>
        <button onClick = {() => increasePrice(product.id)} >Increase</button>
        <button onClick = {() => decreasePrice(product.id)} >decreasePrice</button>
    </div>
  )
}

export default Product;