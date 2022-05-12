const defaultConst ={
    cash: 0,
    customers:[],
  }
  // actions={type:'', payload:''}
  
  export const reducer = (state =defaultConst , actions) => {
    switch(actions.type) {
        case 'addCash':
            return {...state, cash:actions.payload + state.cash}
        case 'minusCash':
            return {...state, cash:state.cash-actions.payload  }
        case 'getApi': 
            return {...state, customers:[...state.customers,actions.payload]}
        case 'delApi': 
            return {...state, customers:state.customers.filter(customer=>customer.id!==actions.payload)}
        case 'getApiJson':
            console.log(actions.payload.data)
            return {...state,customers:[ ...actions.payload.data]}
  
        default:
            return state
    }
  }
  export const getApiActions = (payload) => ({type:'getApi', payload})
  export const delApiActions = (payload) => ({type:'delApi', payload})
  export const getApiJsonActions = (payload) => ({type:'getApiJson', payload})

