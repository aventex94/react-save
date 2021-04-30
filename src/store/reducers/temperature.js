import { GET_TEMPERATURE } from "../../actions/types";

const nowTemperature = JSON.parse(localStorage.getItem("temperature"));

const initialState = nowTemperature
  ? { nowTemperature }
  : {
      nowTemperature: '',
    };
export default function temperature (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TEMPERATURE:
      return { ...state, nowTemperature:payload };
    default:
      return state;
  }
}
