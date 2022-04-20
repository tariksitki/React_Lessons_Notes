
import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import AppReducer from "./AppReducer";
import NewsReducer from "./NewsReducer";

const rootReducer = combineReducers({
    app : AppReducer,
    auth : AuthReducer,
    news : NewsReducer
    // burada verdigimiz isimler bize ait. hangi isimle görmek istersek onu veririz.
    // ve bu isimler artik bizim state lerimiz olur. yani bizim artik bir app state imiz var bir auth state imiz var. chrome extension in da tabloya baktigimiz zaman bize state lerimizi ve bunlarda olan degisiklikleri gösterir. tabloya baktigimizda state bu proje de 3 ana dala ayrilacak ve dallar bu sekilde isimlendirilecektir.
});

export default rootReducer;