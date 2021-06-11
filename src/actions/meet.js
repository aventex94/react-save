import {ADD_MEET, ADD_USER, GET_TEMPERATURE_DATE, BUY_BEERS} from './types';
import TemperatureService from "../../src/service/temperature";
/**
 * 
 * @param {*} meetId 
 * @returns 
 */
export const buyBeers = (meetId) => ({
    type:BUY_BEERS,
    payload:{meetId},
})
/**
 * 
 * @param {*} meet 
 * @returns 
 */
export const addMeet = (meet) =>({
    type:ADD_MEET,
    payload:{meet}
})
/**
 * 
 * @param {*} user 
 * @param {*} meetId 
 * @returns 
 */
export const addUser = (user,meetId) =>({
    type:ADD_USER,
    payload:{user,meetId}
    
})
/**
 * 
 * @param {*} date 
 * @param {*} meetId 
 * @returns 
 */
export const getTemperatureByDate = (date,meetId) => (dispatch) =>{
    return TemperatureService.getTemperatureByDate(date).then(
        (data) => {
            dispatch({
                type: GET_TEMPERATURE_DATE,
                payload:{data:data,meet:meetId},
            });
            return Promise.resolve(data);
        },
        (err) => {
            return Promise.reject(err);
        }
    );
};



