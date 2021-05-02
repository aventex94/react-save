import axios from 'axios';
const API_URL = process.env.REACT_APP_API_BACK_URL;


const getTemperature = async() =>{
    return await axios
    .get(API_URL,{
        params: {q: 'argentina'},
        headers: {
            'x-rapidapi-key': '65225dac38msh79b92e0eacad9cdp1643fcjsn86d83012722b',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
        
    })
    .then(response=>{
        return response.data;

    }).catch(err => {
        throw err;
    })
};

const exported = {
    getTemperature
}
export default exported;


/* const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: '<REQUIRED>'},
   
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  }); */