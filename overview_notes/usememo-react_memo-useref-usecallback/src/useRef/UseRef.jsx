
// input icine autoFocus  yazarak da focus saglanabilir
// onfocus un tersi onblur

// buttonlara disable verebiliriz

// react virtual dom kullanir. esas dom a müdahale cok tercih edilmez. ama kati bir kural yoktur. zor da kalinca müdahale edilebilir.

// Math.trunc sayinin ondalik kismini kaldirir

// Önemli: useRef de ayni querySelector gibi esas dom a ulasir sanal dom a degil. Bir search islemi yapacagimiz zaman value yu önce state e atip daha sonra kullanmak yerine bu durumda direkt useRef kullanimi daha performansli olur.

import { useEffect, useRef } from "react";

const UseRefComponent = () => {
    // document.querySelector("input").focus();
    // direkt bu sekilde dersek sayfa yukaridan asagi render edildiginden henüz input undefined dir 

    const inputRef = useRef(null);
    const divRef = useRef();
    const inputColorRef = useRef();

    useEffect(() => {
        // document.querySelector("input").focus();
        // console.log(inputRef);
        // bu sekilde yazdirdigimizda, icinde current olan bir object elde ederiz.
        // console.log(inputRef.current);

        inputRef.current.focus();

        // input un bir üst elementine background vermek icin direkt kendisine ref verebiliriz ama su sekilde de olur.

        // inputRef.current.parentNode.style.backgroundColor = "red";
        // inputRef.current.parentElement.style.backgroundColor = "red";
    }, []);

    const handleClick = () => {
        divRef.current.style.backgroundColor = "yellow";
        // dikkat current unutmuyoruz.
    }
    const colorArray = [
        "orange",
        "red",
        "blue",
        "yellow"
    ]
    const handleRandomClick = () => {
        const random = Math.trunc(Math.random() * colorArray.length);
        // burada random 0 ila 1 arasinda sayi ürettigi icin 1 üretmez. dolayisi ile length yani 4 ile carptigimizda en fazla 3 küsur üretilir. trunc ile de küsurat kaldirilir.
        divRef.current.style.backgroundColor = colorArray[random];
    }

        // simdi backgroundColor i kullanicidan text alarak degistirelim:
    const handleUserClick = () => {
        const userColor = inputRef.current.value;
        divRef.current.style.backgroundColor = userColor;
        inputRef.current.value = "";
    }


    const handleInputColor = () => {
        const color = inputColorRef.current.value;
        divRef.current.style.backgroundColor = color;
    }

  return (
    <div  >
        <h1>UseRef Component</h1>
        <div ref={divRef} >
            <input ref={inputRef} type="text" placeholder='Enter a Text' />
        </div>
        <button onClick={handleClick} >Change BackgroundColor</button>
        <button onClick={handleRandomClick} >Random BackgroundColor</button>
        <button onClick={handleUserClick} >User BackgroundColor</button>
        <br /><br /><br />

        <input type="color" name="" id="" ref={inputColorRef} />
        <br />
        <button onClick={handleInputColor} >inputColorButton</button>
    </div>
  )
}

export default UseRefComponent;