import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackArrow from "../assets/BackArrow";
import Bag from "../assets/Bag";
import styles from "./Details.module.css";
// params lar app.jsx den geliyor. route tanimlarken path de /:id dedigimiz icin
// burada : den sonraki seyler parametre olur. biz : den sonra ali dersek ali gelir
// peki neden : den sonra id geliyor. cünkü products.js de map islemi esnasinda link tanimlarken product.id olsun dedik.
// sonra route a geldik : dan sonra ne gelirse gelsin sen bunu details a yönlendir dedik. sonra da details a gidip bu sayfaya gelenlerin ne yapacagini düzenledik

const Details = () => {
  const params = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((error) => console.log(error));
  }, []);

  const handleBack = () => {
    navigate(-1);
    // Buraya -2 deseydik 2 önceki sayfaya gönderirdi
    // icona bastigimizda yönlendirme islemini useNavigate yapar
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { product } });
    // buradaki state ve product, useLocation ile ilgilidir
    // useLocation icin bilgiler; butona func tanimladigimiz yerden gönderilir.
    // useLocation i import ve bilgileri kullanma ise icon un kendi component in de yapilir
    // ve hangi ürünün detay sayfasinda isek, oradan tiklama yaptigimiz icin o ürüne ait bilgileri elde etmemizi saglar.
    // kisaca useLocation, sayfalar arasi veri göndermeye yarar.
    // yani bir yerde useNavigate kullanacaksak, devaminda bu sekilde bilgiler göndererek diger tarafta kullanabiliriz
  };

  return (
    <div>
      {/* ÖNEMLI: Button lari cagirdigimiz yerde de onclick ve class ekleyebiliyoruz */}
      <BackArrow onClick={handleBack} className={styles.detailsNavIcon} />
      <h1>Details Page</h1>

      <Bag onClick={handleCheckout} className={styles.detailsNavIcon} />

      <div className={styles.detailsWrapper}>
        <p>{product?.id}</p>
        <p>{product?.description}</p>
        <p>{product?.category}</p>
        <p>{product?.price}</p>
        <p>{product?.title}</p>
        <p>{product?.rating?.rate}</p>
        <img className={styles.detailsImage} src={product?.image} alt="" />
      </div>
    </div>
  );
};

export default Details;

// icons; heroicons dan. svg alip svg to react component diyoruz
// svg en iyi yöntem. is basvurularinda öne gecirir
