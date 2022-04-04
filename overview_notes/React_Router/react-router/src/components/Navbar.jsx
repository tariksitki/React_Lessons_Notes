
import { Link, NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";
// styles importa dikkat

const Navbar = () => {
  return (
    <div className= {styles.navbar} >
        {/* styled component da class isimlerine dikkat */}
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/products">Products</a> 
        a tagleri ile yaptigimiz tanimlama da sayfa her tiklamada yenilenir
        */ }
            {/* Linkler sadece a taglerinin vazifesini yapar. yani icine sadece href e karsilik gelen to alirlar.  */}
        {/* <Link to= "/"  >Home </Link> */}
        <NavLink to = "/" className={({isActive}) => isActive ? styles.activeStyle : undefined } >Home</NavLink>

        <NavLink to = "/about" className={({isActive}) => isActive ? styles.activeStyle : undefined } > About </NavLink>

        <Link to = "/products" >Products</Link>
    </div>
  )
}

export default Navbar;

// navlink ile link farki:
// navlink de; link aktif oldugunda style verebiliyoruz. ama link de böyle birsey yok
// link de active diye birsey yoktur

// module.css farki:
// biz footer da div e footer class i verdik ama console da div i isaretleyip baktigimizda class olarak footer footer görürüz. iste module css unique class lar vererek karisikligi önler.