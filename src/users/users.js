
import {fetchSingleCustomer} from '../acyncActions/customer'
import {useDispatch, useSelector} from 'react-redux'
import '../styles/user.css';
import { NavLink } from 'react-router-dom';

function Users(){
    const dispatch = useDispatch()
    const customer = useSelector(state=>state.customer.customer)
    const location = window.location.pathname;
    const replacer = location.replace(/\//g,"")

    const getSingleCustomer=() => {
        if(customer.length===0){
            dispatch(fetchSingleCustomer(replacer))
        }
        else{
            if(customer.id!=replacer){
                dispatch(fetchSingleCustomer(replacer))
            }
        }
    }
    getSingleCustomer();
    return(
        <div className='user-page'>
           <NavLink to='/' className='user-page__back'>&larr; Вернуться к списку</NavLink>
        <div className='user'>
            <div className='user__container'>
                <div className='user__container-avatar'><img src={customer.avatar} alt='avatar'/></div>
                <div className='user__container-name'> {customer.first_name} {customer.last_name}</div>
                <div className='user__container-email'> Email: <a href={`mailto:${customer.email}`}>{customer.email}</a></div>
            </div>
        </div>
        </div>
    )
}

export default Users