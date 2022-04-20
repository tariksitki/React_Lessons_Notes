
// store reducers in index inde de olsuturulabilir ama best practice burada yapmaktir.

import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from '@redux-devtools/extension';
// bunun kullanimi npmjs.com da yazar
import thunk from "redux-thunk";

let store;

if (process.env.NODE_ENV === "development") {
    store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
} else {
    store = createStore(rootReducer, applyMiddleware(thunk));
}

// birden fazla middleware olsaydi thunk in yanina yazacaktik.

// process.env node.js iel ilgilidir.

// eger yanina () yapmazsak calismaz
// composeWithDevTools,  bunun yerine react a ait compose methodu da kullanilabilirdi.
// createStore func i 2 parametre alir. reducer ve enhancerlardir. eger enhancer birden fazla ise composeWithDevTools methodu ile birlestirilir.
// yarn add @redux-devtools/extension
// daha sonra bu sayfanin yukarisinda import edip kullaniyoruz.

// burada composeWithDevTools kullanmak zorunda degiliz. bu bizim kullandiigmiz google extension. sadece su sekilde de olur applyMiddleware(thunk))

export default store;

// createStore icine sadece bir tane reducer alir. o da combine edilmis reducer dir.
// ayrica parametre olarak enhancer lar alir. thunc yada redux tool lari gibi

// composeWithDevTools nin icerisine bir middleware i nasil alacagi npmjs.com da aciklaniyor. import larini yapmayi unutmuyoruz. thunk kullanabilmek icin projemize redux thunk da dahil edilir. 
//  yarn add redux-thunk



        // development production asamalarinda devtools u ayarlama
// biz projemizi bitirdikten sonra google dev tools disable olsun kimse bizim state lerimizi göremesin istersek su islemleri yapiyoruz.

// npm run build komutu bizim projemizi development dan production asamasina getirir.
// bizim su an projemizde binlerce dosya ve klasör var. browser bunlardan hicbir sey anlamiyor. bu komut calistirildiginda, bizim projemiz klasik html js formatina dönüstürülür ve bu sekilde browser anlar. 

// package.json dosyasinda, bizim build ve test gibi scriptlerimiz var. iste bu scriptlerin calistirilma durumuna göre Process.env bizim projmizin hangi asamada olfugunu anliyor ve bu sayede biz projemizin degisik asamalarinda google dev tools u görünür veya görünmez yapiyoruz.

// build komutu icinde bizim projemizin klasik js html formatlari bulunur. netlify gibi hosting firmalari da github dan bizim react projemizi alir ve bunu npm run build yapar klasik format da gösterebilir yoksa gösteremez.

// netlify da manuel degilde sürekli dgisikliklerin alindigi sekilde yaptigimiz isleme CI/CD denir. yani continious(sürekli) integration / continious delivery

