
    // redux kurulum islemleri:

// Önemli Not: TodoReducer adinda olusturdugumuz sey sadece bir func dan ibarettir. yani func in kendisini olusturdugumuzda henüz reducer olarak görev yapamaz. Bu func in reducer olabilmesi icin, createStore hook u icine atariz. createStore icine sadece bir tane reducer alir. eger birden cok reducer varsa önce bunlar combine edilir.

// combineStores adinda olusturdugumuz store ana index de import edilir ve store adinda bir degiskene atanir. cünkü sarmallama yaptigimiz provider icine store alir.

// Daha sonra type larimiz belirlenir

// action lar belirlenir

// reducer da switch yapisi kurulur

// daha sonra consume e gecilir. yani mesela add butonunu örnek alalim.
// add butona onclick eklenir. onclick ile reducer a etki etmek icin useDispatch import edilir. eger listede yada store daki verileri kullanacaksak useSelector import edilir. 
// onclick ile yapilacak islem dispatch icine yazilir.


// birden  cok reducer kullanacaksak combine etmemiz lazim
// createstore ile de yeni bir store olusturucagiz

import { createStore, combineReducers } from "redux";
import todoReducer from "./reducer/todoReducer";
import counterReducer from "./reducer/counterReducer"


// eger tek reducer varsa bu durumda combine calistirilmadan direkt olarak createStore icine counterReducer yazilabilir.
// createStore sadece tek bir reducer alabilir. bu nedenle birden cok oldugunda combine edilir.
 
   export const reducers = combineReducers({
        counterReducer : counterReducer,
        todoReducer : todoReducer
    })

// export const store = createStore(reducers);
// bu sekilde de calisir. ama bu durumda, ana index.js de sunu yapmamiza gerek kalmaz
// const store = combinedStores();  cünkü burada func calistiriyoruz. ama bizim yeni tanimlamamiz bir func degil artik bir degisken. bu nedenle provider icinde store a direkt buradaki store u yazabiliirz

// sadece ici bos store üretmiyoruz. manipule edebilmek icin icine reducers veriyoruz
// combinedStore ana index js de yada app js de cagrilir ve tüm component lar bununla sarmallanir


   export const combinedStores = () => {
        const store = createStore(reducers);
        return store;
    }


