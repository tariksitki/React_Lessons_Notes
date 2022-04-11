
const MyApp = (props) => {
  return (
    <div>
        {props.children}
        {props.value}
    </div>
  )
}

export default MyApp;

/// Önemli: app.js de hicbir sekilde children kelimesi kullanmiyoruz. ama burada kullaniyoruz. bu tamamen built in dir
// 2 tane children olmaz. cünkü react tek element return eder.
// eger kapsama sarmalama varsa bu sekilde ulasiyoruz
