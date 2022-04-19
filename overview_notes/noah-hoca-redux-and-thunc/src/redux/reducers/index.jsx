
import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import AppReducer from "./AppReducer";
import NewsReducer from "./NewsReducer";

const rootReducer = combineReducers({
    app : AppReducer,
    auth : AuthReducer,
    news : NewsReducer
    // burada verdigimiz isimler bize ait. hangi isimle görmek istersek onu veririz.
});

export default rootReducer;