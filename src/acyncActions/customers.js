import {getApiJsonActions} from '../store/reducer'
import axios from 'axios';

export function fetchCustomers() {
    return function(dispatch) {
      return axios.get('https://reqres.in/api/users')
        .then(({ data }) => {
        dispatch(getApiJsonActions(data));
      })
      .catch(err => { 
        console.log(err); 
      })
    };
  }