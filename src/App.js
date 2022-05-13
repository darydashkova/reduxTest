
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {fetchCustomers} from './acyncActions/customers'
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

function App() {
  const dispatch = useDispatch()
  const customers = useSelector(state=>state.customer.customers)
  const getCustomers=() => {
    if(customers.length===0){
      dispatch(fetchCustomers())
    }  
}
getCustomers()
  return (
    <div className="App">
      <header className="App-header">
       <div>Наши пользователи
         <img src={logo} alt='logo' className='App-header__logo'/>
        </div> 
      </header>
      <div className='App-customers'>
            {customers.map(customer=> 
              <div key={customer.id} >
                <NavLink to={`${customer.id}`} >
                  {customer.first_name} {customer.last_name}
                </NavLink>
              </div>)}
      </div>
  </div>
  );
}

export default App;
