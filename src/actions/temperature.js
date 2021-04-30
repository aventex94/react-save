import { GET_TEMPERATURE } from "./types";
import TemperatureService from "../../src/service/temperature";
export const temperature = () => (dispatch) => {
  return TemperatureService.getTemperature().then(
    (data) => {
      dispatch({
        type: GET_TEMPERATURE,
        payload: { data: data },
      });
      return Promise.resolve();
    },
    (error) => {
      return Promise.reject();
    }
  );
};
