
import { useSelector} from 'react-redux'

function Users(){
    const customers = useSelector(state=>state.customer.customers)
    
    const mm = window.location.pathname;
    const replacer = mm.replace(/\//g,"")
    console.log(replacer)
    return(
        <div>{customers.map(customer=>
            <div  >
              {/* {BasicExample(customer.id)} */}
              {customer.first_name} {customer.last_name}</div>)}</div>
        // <div>{customers}</div>
    )
}

export default Users