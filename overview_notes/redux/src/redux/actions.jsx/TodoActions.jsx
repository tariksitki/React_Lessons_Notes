import { add_todo, clear_todo, delete_todo, toggle_todo } from "../types/TodoTypes"

export const addTodoFunc = (payload) => {

    return {
        type : add_todo,
        payload : payload
    }
}
// todo ekleyebilmek icin text e yani input da user in girdigi todo ismine  ihtiyacimiz var. burada text, payload ile gelir. id miz ise zaten counter + 1 den gelir.
 

export const deleteTodoFunc = (payload) => {
    return {
        type : delete_todo,
        payload
    }
}
// Js de eger key ve value ciftleri birbirine esitse, sag tarafi yazmasak da olur. 


export const clearTodoFunc = () => {
    return {
        type : clear_todo
    }
}
// burada listeyi komple silecegi icin payload a ihtiyac yok


export const toggleTodoFunc = (payload) => {
    return {
        type : toggle_todo,
        payload
    }
}