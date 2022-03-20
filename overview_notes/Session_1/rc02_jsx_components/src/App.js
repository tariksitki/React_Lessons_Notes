import Footer from "./Footer.jsx"
// import {Header} from "./Header";
import Header2, {Header} from "./Header";
import Msg, {currentTimeFunc} from "./Msg"


// import Msg yerine myMsg da kullanilabilir
// iki tane ayni isim varsa as ile degisebilir

    /// functional component
// function App() {
//   return (
//     <div>
//       <h1>Hello React</h1>
//       <h1>Hello React</h1>
      
//       <Header />
//     </div>
//   );
// }


function App() {
  return (
    <>
      <h1>Hello React</h1>
      <h1>Hello React</h1>
      <Header/>
      <Header2/>
      
      {/* <Header />
      <Header />
      <Msg />
      <Footer /> */}

      <Footer/>
      <Msg />
      <currentTimeFunc />
    </>
  );
}

export default App;

// <Foo  yazdigimizda otomatik cikar ve import a gerek kalmaz


/// component yazarken, return ün disi js ortamidir. return ün ici ise jsx ortamidir burada jsx kurallari gecerlidir.

// best practice olarak tüm componentler app e baglanir

























//! We can create a Component in React via 2 ways.
//! 1-) Function-based (state of the art )
//! 2-) Class-based (more complex and less effective)

//? React uses JSX.
//? In JSX, we can directly use HTML elements in JS

//! Components can return a combined HTML,CSS,JS code.
//! But, it must return a single containered (like div, section, article, <> etc.) element



//*******************************************************************************************/
//* In JSX, Styling can be performed in various ways.
//* 1-) Inline-Styling can be used.
//* 2-) Styling can be defined as a local or global variable.
//* 3-) Styling can be defined as external stylesheet.

//! NOTES:
//* For styling, property-value(object) structure is used.
//* camelCase is used for property name,
//* className is used for class definitions
//* 3rd parties libraries like Material UI, Styled Component, Sass, Bootstrap etc.
//* can also be used for styling


