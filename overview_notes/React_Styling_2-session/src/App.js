
import Card from "./components/card/Card";
import Inline from "./components/inline-style/Inline";
import ModuleBtn from "./components/moduleCss/ModuleBtn";
import StyleSheet from "./components/regular-style/StyleSheet";
import data from "./data";


const App = () => {
  return (
    <>
      <Inline colorr = "yellow" textColor = "green" />
      <StyleSheet secenek = {true} />
      <Card veri = {data} />

      <ModuleBtn btnStyle = "birinci" btnName = "ModuleBtn1"/>
      <ModuleBtn btnStyle = "ikinci" btnName = "ModuleBtn2"/>
    </>
  );
};

export default App;


// module.css bize stilleri bir object gibi dönüyor, o yüzden stillere dot notation / bracket notation ile ulaşıyoruz