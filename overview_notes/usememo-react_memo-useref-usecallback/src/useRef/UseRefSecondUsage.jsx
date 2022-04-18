

// ikinci kullanimimizda useRef ile bir object olusturacagiz ve bu object in icinde olusan current ile bir counter yapacagiz.

// useRef kullanimina örnek. 
// jodit diye bir text editör var. bu editörün farkli farkli kullanimlari var. mesela onChange ile yada ref ile kullanilabiliyor. text editörlerinde sürekli veri girisi oldugu icin onChange ile cok yavas calisir. bu nedenle her degisiklikte render olmasin da sadece submit butonuna tikladigimizda render olsun istersek useRef kullaniriz.

// yani kullaniciya anlik yansitmak istemedigimiz yerlerde

import { useRef, useState } from 'react';

const UseRefSecondUsage = () => {
    const [value, setValue] = useState();
    const valueRef =  useRef(0);

    // console.log(valueRef);

    const increase = () => {
        valueRef.current += 1;
        // normal de buraya kadar olan kodlar ile artirma islemi yapilir. ama useRef de sayfa useState gibi render edilmez. bu nedenle state atamadan göremeyiz.
        setValue(valueRef.current);
        console.log(value); 
    }
  return (
    <div>
        <button onClick={increase} >INCREASE</button>
    </div>
  )
}

export default UseRefSecondUsage;

/// Önemli Note: bizim yukarida tanimladigimiz valueRef aslinda söyle birsey olusturur.
//  const valueObj = {current : 0}
// ama normal bir object den ne farki var. react da her bir element in bir referansi vardir. ve component render edildiginde bu referans lar tekrar atanir. ama useRef bize referansi degismeyen bir object olusturur bu nedenle her seferinde render edilmez. bu da bize performans saglar.
// biz burada bir referans atamasi yapmadik bir object olusturduk.

