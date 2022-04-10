
import { useContext } from 'react';
import {ProductContext} from "./ProductContext";
import Product from './Product'

const ProductList = () => {
    const {products} = useContext(ProductContext);
        // burada destructure ile ihtiyacimiz olanlari aliyoruz. bunlarin hepsi value olarak Context den gönderildi
        // const {student} = useContext(StudentContext); 
        // eger baska bir context imiz varsa onu da bu sekilde kullanabiliriz
        // Biz context tanimlamada verileri value ile object olarak gönderdigimiz icin burada object olarak yakalamak zorunda kaldik. array gönderseydik context bize Array getirecekti
  return (
        <div>
            {products.map((product) => (
                <Product key={product.id} product = {product} />
            ) )}
        </div>
        // burada product i map leyip o sekilde gönderdik. cünkü böyle yapmasaydik kullanacagimiz yerde tekrar map lemek zorunda kalacaktik hangisini kullanacagimizi bilmedigimiz icin
  )
}

export default ProductList;

// eger birsey import edilmemis ise üzerine gelip ctrl alt yaptigimizda nereden import edecegini söyler bize 