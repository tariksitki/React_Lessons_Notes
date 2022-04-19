
// rxreducer kisa yol

import { set_loading, clear_loading } from "../types/AppTypes";

const initialState = {
    loading : false
}

// Dikkat burada action i havada destructure ediyoruz. o nedenle kullanirken action.type degil
const AppReducer = (state = initialState, {type, payload} ) => {
    switch (type) {
        case set_loading:
            return { ...state, loading : true };
        case clear_loading:
            return { ...state, loading : false };
        default:
            return state;
    }
};
// default da return state olmak zorunda. cünkü 2 ihtimal disinda birsey gelirse hata verir
export default AppReducer;