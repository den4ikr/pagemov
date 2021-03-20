import { SET_RESULT } from "../../constants";

const initialState = {
  result: [],
};

export const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULT:
      return { ...state, result: action.result };
    default:
      return state;
  }
};
