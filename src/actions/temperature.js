import { GET_TEMPERATURE } from "./types";
import TemperatureService from "../../src/service/temperature";
/**
 * 
 * @returns 
 */
export const temperature = () => (dispatch) => {
  return TemperatureService.getTemperature().then(
    (data) => {
      dispatch({
        type: GET_TEMPERATURE,
        payload: { data: data },
      });
      return Promise.resolve(data);
    },
    (err) => {
      return Promise.reject(err);
    }
  );
};
