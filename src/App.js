import logo from './logo.svg';
import './App.css';
// import BasicExample from './router/router'
import {useDispatch, useSelector} from 'react-redux'
import {getApiActions, delApiActions} from './store/reducer'
import {fetchCustomers} from './acyncActions/customers'
import { NavLink } from 'react-router-dom';

import { useState} from 'react'

function App() {
  const [count, setCount] = useState([]);
  const dispatch = useDispatch()
  const cash = useSelector(state=>state.customer.cash)
  const customers = useSelector(state=>state.customer.customers)
  const addCash=(cash)=>{
    dispatch({type:'addCash',payload:cash})

  }
  const minusCash=(cash)=>{
    dispatch({type:'minusCash',payload:cash})

  }
  const addCustomer=(name) => {
    const customer ={ 
      name,
      id:Date.now(),
    }
    dispatch(getApiActions(customer))
  }
  const removeCustomer=() => {
  
    // dispatch(delApiActions(customer.id))
    dispatch(fetchCustomers())
    setCount(customers)
  }
// console.log(count)
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {cash} 
        
        <button onClick={()=>addCash(Number(prompt()))}>Добавить</button>
        <button onClick={()=>minusCash(Number(prompt()))}>Уменьшить</button>
        <button onClick={()=>addCustomer(prompt())}>получить</button>
        <button onClick={()=>removeCustomer(3)}>полdcdfdfffучить</button>
        <button onClick={()=>dispatch(fetchCustomers())}>получить из базы</button>
{/* {count} */}
        {count.map(customer=> 
          <div onClick={()=>removeCustomer(customer)} >
            {/* {BasicExample(customer.id)} */}
          {/* <NavLink to={`${customer.id}`}>  */}
           {customer.first_name} {customer.last_name}
           {/* </NavLink> */}
           </div>)}
          
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
