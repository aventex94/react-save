import { SET_LOGIN } from "../../actions/types";

/* const initialState = {
  id: 1,
  username: "ADMIN",
  password: "12345678",
  rol: "",
  loggin:false,
}; */

const userLogin = JSON.parse(localStorage.getItem("user"));

const initialState = userLogin
  ? { userLogin, loggin: true }
  : {
      userLogin: false,
      loggin: false,
    };

export default function user(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOGIN:
      if (
        payload.username === state.username &&
        payload.password === state.password
      )
        return { ...state, loggin: true, rol: "ADMIN" };
      return state;
    default:
      return state;
  }
}
