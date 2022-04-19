
import {set_loading, clear_loading} from "../types/appTypes";

const initialState = {
    loading : false,
}

export default AppReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case set_loading:
    return { ...state, loading : true }

  case clear_loading:
      return {...state, loading : false};

  default:
    return state
  }
}
