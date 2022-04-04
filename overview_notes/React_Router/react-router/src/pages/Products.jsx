import { useEffect, useState} from "react";
import styles from "./Products.module.css";
import {Link} from "react-router-dom"


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => setProducts(json))
    .catch(error => console.log(error))
  }, []);

  console.log(products);
  return (
    <div>
      <h2>Products</h2>
      <div  className={styles.products}>
        {products.map((product) => (
            // ürünlere tiklandiginda details a gitmesi icin 3 islem yapiyoruz. 1: tüm ürünlerin divlerini Link icine aliyoruz div ler iptal(to dikkat)
            // 2: app.js de yeni bir route olustur. 3: details componenti olustur

          <Link to= {`/details/${product.id}`} key={product.id} className = {styles.product} >
              <h6>{product.category} </h6>
              <p>{product.title} </p>
              <img src={product.image} style = {{width : "100px", display : "block", margin : "auto"}} alt="" />
          </Link>


              // Önemli ayrinti: burada details basina / koymazsak, hangi sayfada tiklama yapti isek o andaki linkin sonuna details ekler. ama / koyarsak, bu durumda base url e kadar herseyi siler ve sonuna details ekler.
              // eger basindaki / silersek bu durumda, route lara gidip details in route unun path kismina "products/details" yazmamiz gerekir
        ) )}
      </div>
    </div>
  )
}

export default Products;

// api ye atmis oldugumuz isteklerin tamamini console kisminda network de görebiliriz
// gelenlerden birinin üzerine tikladigimizda, header preview gibi basliklar var
// burada preview kisminda bize gelen cevaplari görebilirz
// postman gibi kullanilir ama her zaman postman kullanilamaz



