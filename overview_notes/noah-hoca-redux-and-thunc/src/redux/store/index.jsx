
// store reducers in index inde de olsuturulabilir ama best practice burada yapmaktir.

import { createStore } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from '@redux-devtools/extension';
// bunun kullanimi npmjs.com da yazar

const store = createStore(rootReducer, composeWithDevTools());
// eger yanina () yapmazsak calismaz

export default store;

// createStore icine sadece bir tane reducer alir. o da combine edilmis reducer dir.
// ayrica parametre olarak enhancer lar alir. thunc yada redux tool lari gibi