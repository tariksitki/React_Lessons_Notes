
import {set_news_list, clear_news_list} from "../types/NewsTypes";

const initialState = {
    newsList : []
};

const NewsReducer = (state = initialState, {type, payload} ) => {
    switch (type) {
        case set_news_list:
            return {...state, newsList : payload}
        case clear_news_list:
            return initialState.newsList;   
        default:
            return state;
    }
};

export default NewsReducer;