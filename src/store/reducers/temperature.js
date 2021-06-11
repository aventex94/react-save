import { GET_TEMPERATURE } from "../../actions/types";

const initialState = {
  temperature,
};
/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export default function temperature(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TEMPERATURE:
      return { ...state, temperature: payload.data.current };
    default:
      return state;
  }
}
