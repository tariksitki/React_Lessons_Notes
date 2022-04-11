
import {createContext, useState} from "react";
// burada createContext yanina as cC de yazabiliriz

export const ProductContext = createContext();
// birden cok gönderim yapacagimiz icin export dedik sadece
// olusturma esnasinda create kullanma da use

const initialProducts = [
    {id : 0, product : "Basketball" , price : 12 },
    {id : 1, product : "Baseball" , price : 30 },
    {id : 2, product : "Tennis Racquet" , price : 50 }
]

export const ProductProvider = (props) => {
    const [products, setProducts] = useState(initialProducts);

    const increasePrice = (id) => {
        //Önemli: onclick tanimlanan yerden event gönderilmese bile burada event yakalanabiliyor. Buttonlarin oldugu yerde id tanimlamasi yaptik. simdi burada kullanacagiz.
        const newProducts = [...products]
        // Önemli: Burada 3 nokta kullanmamizin sebebi: Eger ... kullanmasaydik her seferinde render olmayacakti.
        newProducts[id].price += 1;
        setProducts(newProducts);
    }
        // button tanimladigimiz yerden event degil id gönderdik
    const decreasePrice = (id) => {
        const newProducts = [...products];
        newProducts[id].price -= 1;
        setProducts(newProducts);
    }
    return <ProductContext.Provider value={{products, increasePrice, decreasePrice, setProducts}}>
        {props.children}
        {/* Burada iki tane {{}} göndermek diger tarafta alirken önemli  */}
        {/* Burada kullandigimiz propsu func icine parametre aldik. peki nereden geldi bu props? withContextApp de Provider i cagirirken icine yazdigimiz ProductList dir props umuz */}
        {/* Bu ne demek: benim sarmalladigim herseyi benim children im olarak render et demek */}
        {/* Burada children kullanmak zorundayiz. Bu sekilde alt componentlere tek tek props göndermek yerine hepsini tek seferde sarmallamis ve hepsine ayni anda göndermis oluyoruz.  */}
    </ProductContext.Provider>

    // kullanacagimiz tüm herseyi context icinde tanimlamak yeterli degil. bunlari birde value ile göndermemiz gerekir. value nun adi degisemez

    // burada ProductContext.Provider in kullanim tarzina bakarsak, func degildir bir component dir
   
}

// provider da props gönderme islemi value ile olur. bu sekilde verileri sepete attik ve bunlari asagidaki component lerde kullanacagiz
 // burada provider, import ettigimiz createContext in icinde built in olarak gelir

// Önemli: Kullanacagimiz tüm componentler, Provider in alt component i olmak zorunda
// yani bunun children i olmak zorunda

// children ve value yu anlamak icin myApp diye bir component olusturuyoruz simdi

// not: Birden cok context olusturulabilir. her context e kendi ile ilgili olan state ve degiskenler konulur. Burada ProductContext dememizin sebebi de budur. 
// eger tek bir context olursa ve hepsi bunun icin de olursa, bu durumda her degisiklikte bu komple calisir.

// eger axios kullanacaksak onu da burada bir func olarak tanimlayip value ile gönderim yapabiliriz. ama axios icin ayri bir context dosyasi olusturursak daha iyi olur.