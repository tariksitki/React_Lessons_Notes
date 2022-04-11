
import { ProductProvider } from '../withContextSelf/ProductContext';
import ProductList from './ProductList';

const WithContextApp2 = () => {
  return (
    <ProductProvider>
        <ProductList />
    </ProductProvider>
  )
}

export default WithContextApp2;