import {getApiJsonSingleActions} from '../store/reducer'
import axios from 'axios';

export function fetchSingleCustomer(index) {
   
    return function(dispatch) {
      return axios.get(`https://reqres.in/api/users/${index}`)
        .then(({ data }) => {
        dispatch(getApiJsonSingleActions(data));
      })
      .catch(err => { 
        console.log(err); 
      })
    };
  }