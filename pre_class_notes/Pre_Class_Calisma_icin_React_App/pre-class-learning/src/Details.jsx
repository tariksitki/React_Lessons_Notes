import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";


const Details = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  return (
    <div>
      <h1>Details Page</h1>
      <div>
        <p>{product?.id}</p>
        <p>{product?.title}</p>
        <p>{product?.desciption}</p>
        <p>{product?.category}</p>
        <p>{product?.price}</p>
        <p>{product?.rating?.rate}</p>
        <p>{product?.rating?.count}</p>
        <img
          className={styles.detailsImage}
          src={product?.image}
          alt={product?.title}
        />
      </div>
    </div>
  );
};
export default Details;