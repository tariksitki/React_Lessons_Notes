
// store reducers in index inde de olsuturulabilir ama best practice burada yapmaktir.

import { createStore } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from '@redux-devtools/extension';
// bunun kullanimi npmjs.com da yazar

const store = createStore(rootReducer, composeWithDevTools());
// eger yanina () yapmazsak calismaz
// composeWithDevTools,  bunun yerine react a ait compose methodu da kullanilabilirdi.
// createStore func i 2 parametre alir. reducer ve enhancerlardir. eger enhancer birden fazla ise composeWithDevTools methodu ile birlestirilir.
// yarn add @redux-devtools/extension
// daha sonra bu sayfanin yukarisinda import edip kullaniyoruz.

export default store;

// createStore icine sadece bir tane reducer alir. o da combine edilmis reducer dir.
// ayrica parametre olarak enhancer lar alir. thunc yada redux tool lari gibi