import { ADD_PRODUCT } from "../../actions/types";

const initialState = [
  {
    id: 1,
    descrip: "IPA",
    monto: "$20",
  },
  { id: 2, descrip: "HONEY", monto: "$30" },
];

export default function product(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT:
      return { ...state, product: payload };
    default:
      return state;
  }
}
