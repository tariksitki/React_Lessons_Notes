
import { set_news_list, clear_news_list } from "../types/NewsTypes"

export const setNewsList = (payload) => ({
    type : set_news_list,
    payload
});

export const clearNewsList = () => ({
    type : clear_news_list
});