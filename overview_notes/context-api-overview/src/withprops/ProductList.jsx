import Product from "./Product";


const ProductList = ({products, increasePrice, decreasePrice}) => {
    console.log(products);
  return (
    <div>
        {
        products.map((product) => {
            return (
                <Product key={product.id} product = {product} increasePrice = {increasePrice} decreasePrice = {decreasePrice} />
            )
        })
    }
    </div>
  )
}

export default ProductList