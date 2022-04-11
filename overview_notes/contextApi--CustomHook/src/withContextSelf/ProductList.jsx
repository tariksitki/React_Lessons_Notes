
import {useContext} from 'react';
import Product from './Product';
import { ProductContext } from './ProductContext';

const ProductList = () => {
    const {products} = useContext(ProductContext);

  return (
    <div>
        {
            products?.map((product) => {
                return (
                    <Product product = {product} key = {product.id} />
                )
            })
        }
    </div>
  )
}

export default ProductList;