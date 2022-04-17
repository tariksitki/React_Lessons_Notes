
/// Note: redux da tüm islemleri reducer yapar. biz reducer ile, useDispatch ve useSelector ile anlasiriz.
// biz globalde olusturdugumuz store a direkt müdahale edemiyoruz. müdahale icin 2 hook u kullaniyoruz.

// store u createStore ile olusturuyoruz, store umuzu göremiyoruz.

// redux kelimesi reducer func dan gelir. Bu nedenle redux da yaptigimiz asil ana islemler reducer icinde döner

import { add_todo, clear_todo, toggle_todo, delete_todo } from "../types/TodoTypes";

// simdi initialState icinde örnek bir todo list olusturacagiz. burada counter olusturma sebebeimiz, her todo eklendiginde counter 1 artacak ve bu sayi id olarak atanacak. yani unique id atamasi yapiyoruz.

const initialState = {
  counter: 0,
  list: [{ id: 0, text: "Add_todo", completed: false }],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_todo:
        console.log(state);
      return {
        ...state,
        counter: state.counter + 1,
        list: [
          ...state.list,
          {
            id: state.counter + 1,
            text: action.payload,
            completed: false,
          },
        ],
      };
      // burada ...state.list den sonra actigimiz {} ;  listeyi aynen al ve daha sonra yeni bir object olustur ve verileri de icerideki gibi olsun demek. bir üstündeki ...state de ise durum farklidir. orada counter i her seferinde degistiririz yani üzerinde yazariz.
      
    case clear_todo:
        return {...state,
                list : []
        };
    case toggle_todo:
        return {
            ...state,
            list : state.list.map(item => item.id === action.payload ? {...item, completed : !item.completed} : item)
        }
    case delete_todo:
        return {
            ...state,
            list : state.list.filter((item) => item.id !== action.payload)
        }

    default:
      return state;
  }
};

export default todoReducer;
