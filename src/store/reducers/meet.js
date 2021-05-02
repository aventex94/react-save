import Meet from "../../model/meet";
import { ADD_MEET } from "../../actions/types";


const initialState = {
  meets: [],
};

export default function meet(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_MEET:
      let aux = state.meets;
      aux.push(payload.meet);
      return { ...state, meets: aux };
    default:
      return state;
  }
}
