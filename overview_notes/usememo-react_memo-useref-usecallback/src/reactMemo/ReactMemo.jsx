
// burada bir counter yapacagiz ve sunu görmeye calisacagiz. 
// counter her arttiginda header da render edilir cünkü child component dir. counter her arttiginda header component de yazdigimiz console.log da calisir. iste performans nedeni ile header in render edilmesini istemiyorsak bu durumda react memo kullanacagiz.

// Bu duruma engel olmak icin header a gidip react.memo ile sarmallama yapacagiz. tüm component ()  icine alinir. React.memo react in kendisinden gelir. sadece component in en tepesinde React in import edilmis olmasi yeterlidir.

// sarmallamadan sonra header bir kez render edilir ve hafizaya alinir. Bundan sonra header da bir degisiklik olana kadar birdaha header render edilmez.

// simdi component i sarmalladik. ama simdi birde foto degisikligi yapacagiz. bu durumda component i sarmallamis olmamiz yeterli olmayacak yine de degisiklik oldugu icin render edilecek.

// fotograf degiiskliginde header tekrar render edilir. ancak tekrar ayni fotoya bastigimizda state de bir degisiklik olmadigi icin bu durumda render olmaz

// react memo 3 kullanimi vardir. birincisi normal sarmallama
// ikincisi memo yu react den destructure ile import etme ve sadece memo olarak sarmallama
// 3. ise en altta export kisminda 

// react memo da component hafizaya alindigi icin, eger gereksiz yere kullanirsak hafizaya bos yere yük binmis olur. 

/// hafizadaki veriler client tarafindaki memory de tutulur

import { useState } from 'react';
import Header from './Header';
import fs from "../assets/fs.png";
import aws from "../assets/aws.png";

const ReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [img, setImg] = useState();

    const handleClick = () => {
        setCounter(counter + 1);
        console.log(counter);
    }
    
  return (
    <div>
        <Header img = {img} />
        <p>Count : {counter}</p>
        <button onClick={handleClick} >Change Counter</button>
        <button onClick={() => setImg(fs)} > Fs Foto </button>
        <button onClick={() => setImg(aws)} > Aws Foto </button>
    </div>
  )
}

export default ReactMemo;