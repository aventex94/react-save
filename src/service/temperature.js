import axios from 'axios';
const API_URL = process.env.REACT_APP_API_DATE_URL;
const getTemperatureByDate = async(date) =>{
    return await axios
    .get(API_URL,{
        params:{
            q:'argentina',
            dt:date,
        },
        headers: {
            'x-rapidapi-key': '65225dac38msh79b92e0eacad9cdp1643fcjsn86d83012722b',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    }).then((response) => {
        return response;
    }).catch((err)=>{
        throw err;
    })
}
const exported = {
    getTemperatureByDate
}
export default exported;
