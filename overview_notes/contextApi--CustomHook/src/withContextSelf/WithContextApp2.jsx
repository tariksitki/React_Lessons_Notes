
import { ProductProvider } from '../withContextSelf/ProductContext';
import ProductList from './ProductList';

const WithContextApp2 = (props) => {
  return (
    <ProductProvider children = {props.children} >
      <ProductList />
    </ProductProvider>
       
  )
}

export default WithContextApp2;



