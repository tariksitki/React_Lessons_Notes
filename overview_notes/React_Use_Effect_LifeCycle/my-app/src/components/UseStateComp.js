import React from 'react'
import { useState } from 'react'
//! Don’t call Hooks inside loops, conditions, or nested functions.
//! Don’t call Hooks from regular JavaScript functions.
//* Only call Hooks at the top level
//* Call Hooks from React function components.
//* Call Hooks from custom Hooks.
//  Herhangi bir func icinden hooklar cagrilamaz sadece component icinde

// class component da 3 asamada yaptigimiz islemleri useEffect de tek seferde yapacagiz
// Hooks:  class component yazmadan react özelliklerini kullanma imkani verirler
// hooh lar bizim react state lerine ve lifecycle larina kanca atmamiza imkan veren func lardir. hook lar sadece func component larda calisir
// useState ve useEffect birer hook dur.
// hook lar import edilerek kullanilir


const UseStateComp = () => {

  const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    name : "felix",
    email : "abcdefg@gmail.com",
    tel : "0123456",
    age : "33"
  });

  const handlerIncrease = () => {
    console.log(count);
    setCount((count) => count + 1)
      // setCount un farkli bir kullanimi. Bu kulanimda property olarak count un prevState degerini alir. bu degeri istersek baska yerde kulanabiliriz.
  }

      // spread ile eski degerleri alma
  const handleUser = () => setUser({...user, name : "tarik", age : "55"});
  // burada önce name ve age sonra ...user yazarsak olmaz. degerler degismez

  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Count: {count} </p>
      <button onClick={handlerIncrease}>Increase</button>

        {/* user */}
      {/* <p>{user}</p> */}
        {/* state object oldugunda bu sekilde kullanim olmaz asagidaki gibi olmali*/}

        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.tel}</p>
        <p>{user.age}</p>
      <button onClick={handleUser} >User Button</button>
      
    </div>
  )
}

export default UseStateComp;

// best practice: button a eklenen onclick icin eventHandler i retrun kisminin yukarisinda tanimlariz. eger direkt onclick icinde tanimlarsak hizi yavaslatir

// class yapilarda, state degistiginde sadece render kismi calisirdi. func yapilarda ise render component in tamamidir. yani state degistiginde komple component render edilir.

