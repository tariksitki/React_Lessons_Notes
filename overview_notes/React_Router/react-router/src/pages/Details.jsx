
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styles from "./Details.module.css";
// params lar app.jsx den geliyor. route tanimlarken path de /:id dedigimiz icin
// burada : den sonraki seyler parametre olur. biz : den sonra ali dersek ali gelir
// peki neden : den sonra id geliyor. cünkü products.js de map islemi esnasinda link tanimlarken product.id olsun dedik. 
// sonra route a geldik : dan sonra ne gelirse gelsin sen bunu details a yönlendir dedik. sonra da details a gidip bu sayfaya gelenlerin ne yapacagini düzenledik

const Details = () => {
    const params =  useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then((res) => res.json())
        .then((json) => setProduct(json))
        .catch(error => console.log(error))
      }, []);
    
  return (
    <div>
        <h1>Details Page</h1>
        <div className={styles.detailsWrapper} >
            <p>{product?.id}</p>
            <p>{product?.description}</p>
            <p>{product?.category}</p>
            <p>{product?.price}</p>
            <p>{product?.title}</p>
            <p>{product?.rating?.rate}</p>
            <img className={styles.detailsImage} src={product?.image} alt="" />
        </div>
    </div>
  )
}

export default Details;