
// birden  cok reducer kullanacaksak combine etmemiz lazim
// createstore ile de yeni bir store olusturucagiz

import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer/counterReducer";

const reducers = combineReducers({
    counterReducer : counterReducer
});


// eger tek reducer varsa bu durumda comcine calistirilmadan direkt olarak createStore icine counterReducer yazilabilir.
// createStore sadece tek bir reducer alabilir. bu nedenle birden cok oldugunda combine edilir.
 
export const combinedStores = () => {
    const store = createStore(reducers);
    return store;
}

// sadece ici bos store üretmiyoruz. manipule edebilmek icin icine reducers veriyoruz
// combinedStore ana index js de yada app js de cagrilir ve tüm component lar bununla sarmallanir


