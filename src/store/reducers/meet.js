import { ADD_MEET, ADD_USER, GET_TEMPERATURE_DATE, BUY_BEERS } from "../../actions/types";

const initialState = {
  meets: [],
};
/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export default function meet(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case BUY_BEERS:
      state.meets.filter((meet) => meet._id === payload.meetId)[0]._beers += 6;
      return {...state}
    case ADD_MEET:
      let aux = state.meets;
      aux.push(payload.meet);
      return { ...state, meets: aux };
    case ADD_USER:
      let actualMeet = state.meets
        .filter((meet) => meet._id === payload.meetId)[0];
      actualMeet._users.push(payload.user);
      return {...state}; 
    case GET_TEMPERATURE_DATE:
      let meet = state.meets.filter((meet) => meet._id === payload.meet)[0];
      meet._temperature = payload.data.data.forecast.forecastday[0].day.maxtemp_c;
      return {...state};
    default:
      return state;
  }
}
