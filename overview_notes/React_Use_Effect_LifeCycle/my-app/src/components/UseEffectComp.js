import React, { useState, useEffect } from 'react'

const UseEffectComp = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(4)

  const increase = () => setCount(count + 1)
  const increaseAge = () => setAge(age + 1)

    // useEffect icine bir callBack func alir. Bu func disarida da tanimlanabilir
    // Burada icine bagimlilik yazmadik. Bu nedenle her render da calisir
  // useEffect(() => { 
  //   console.log("UseEffect");
  // })

  // const ConsoleLog = () => console.log("UseEffect");
  // useEffect(ConsoleLog);

      // [] ile didMount gibi
  // useEffect(() => { 
  //   console.log("UseEffect");
  // }, []);


      /// variable ile useEffect gibi:
      // class yapisinda didUpdate icin kosul yaziyorduk. eger state degisti ise update calissin diyorduk. func yapi ise akilli. [] icine sadece state yaziyoruz algiliyor
  useEffect(() => {
    console.log("UseEffect");
    // count !== 0 && alert("New Notification");
    // count un her degistigini useEffect algilayacak ve calisacak

        //// Dikkat: useEffect icinde setState kullanimi tehlikeli
        // setCount(count + 1); 
        // Bu func i burada kullanirsak, sonsuz döngü


        /// class lardaki unmounted islemi func larda; useEffect icinde return ile olur
        // bu en son calisir. bunu simule etmek icin app.js de kosul olusturacagiz.
        // component öldügünde, sadece bu calisir. render ve diger useEffect calismaz
        // ÖNEMLI: func lardaki return class lardaki gibi sadece öldügünde calismaz. ayni zamanda update de de calisir

      
    /// simdi update oldugunda 3 saniye sonra alert verdirecegiz. ama 3 saniye dolmadan component i öldürdügümüzde return de clear yaptigimiz icin calismayacak
    const timer = setTimeout(() => {
        alert("Hello")
    }, 3000)

    return () => {
      console.log("Component Unmounted");
      clearTimeout(timer);  // buna clean up func denir
    }

  }, [count, age])
      /// eger sadece count degistiginde update olsun istersek sadece count yazilir


    // func componentlarda her yer render dir
  console.log("component Rendered");
  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Count: {count} </p>
      <button onClick={increase}>Increase Count</button>
      <p>Age: {age} </p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  )
}

export default UseEffectComp;


// eger dependency yani bagimlilik degiskeni vermezsek, useEffect hem ilk render da hem de her render da calisir. yani class da, hem didMount a hem de didUpdate e birlikte karsilik gelir

// eger [] olarak ici bos bagimlilik verirsek, bu durumda sadece ilk render da calisir.

// eger variable olarak bagimlilik verirsek didUpdate gibi calisir.

// useEffect ve class daki lifeCycle lar sideEffect leri olusturmak icin kullanilir.
// mesela api den veri cekme, setTimeOut, async yapi

// bu yapilar async yapida oldugu icin, hepsi render isleminden sonra calisir
