
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Footer from "./components/Footer";
import Products from "./Products";
import NotFound from "./NotFound";
import "./App.css";
import styles from "./components/Navbar.module.css";
import Details from "./Details";


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
                <Route path="/products/details" element = {<Details />} /> 
                {/* <Route path="/details" element = {<Details />} />  */}
                <Route path="*" element = {<NotFound />} /> 
            </Routes>
            </div>
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App


// https://github.com/edwardBenedict/router-shop