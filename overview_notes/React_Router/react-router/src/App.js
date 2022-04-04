

import "./App.css";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";
  // import esnasinda {} icine almazsak calismaz



const App = () => {
  return (
    
    <div className="App">
      <BrowserRouter>
          <Navbar />
              <div className="main">
                  <Routes>
                    <Route path="/" element = {<Home />} />
                    <Route path="/about" element = {<About />} />
                    <Route path="/products" element = {<Products />} />
                    <Route path="/details/:id" element = {<Details />} />
                      {/* : demek details dan sonra ne gelirse gelsin Details a git demek  */}
                      <Route path="/checkout" element = {<Checkout />} />
                    <Route path="*" element = {<NotFound />} />
                  </Routes>
              </div>
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

/* routes route larin en disina yazilir. route lar arasinda secim yapmamizi saglar. hangi link geldi ise ona yönlendirme yapar. eger navbar i routes icine koyarsak hata verir. routes icine koyacagimiz seyler route tag i icinde olmalidir.*/

// Navbar ve footer lar component larimiz 
// digerleri ise pages lerimiz
// navbar ve footer her sayfada ortak oldugu icin routes disina koyduk. bunlarin herhang bir routes yapisina bagli olmasini istemiyoruz

// BrowserRouter da bir div dir. bu nedenle kapsayici div i kaldirsak da calisir

// sayfa aramalarinda büyük küyük harf farketmez burada da farketmez

// Home u en üste koymak zorunda degiliz

// mesela home yapisina özel bir navbar istersek bunu home sayfasi icinde dizayn edebiliriz

// class verebilmek icin routesleri div icine aldik. eger sadece route lari alip routes leri div disinda birakirsak hata aliriz

// islemleri link ile yapabiliyorsak, bu durumda navlink ile yapmayalim

// Link tagi ile yönlendirme yapariz. yani link icindeki elemana tiklandiginda bizi nereye yönlendirecegi belirlenir. Route ise linkin yönlendirdigi adresteki istekleri karsilar ve bu istekleri gitmesi gereken yere yönlendirir

// linkleri a tagi ile yaptigimizda her seferinde sayfa yenilendiginden sitemiz yavaslar

// : ile olan isleme dynamic routing denir. aramak icin react router dom dynamic routing




// https://github.com/edwardBenedict/router-shop