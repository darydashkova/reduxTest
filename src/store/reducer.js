const defaultConst ={
    cash: 0,
    customers:[],
    customer:[],
  }
  
  export const reducer = (state =defaultConst , actions) => {
    switch(actions.type) {
        case 'getApiJson':
            return {...state,customers:[ ...actions.payload.data]}
        case 'getApiJsonSingle':
            return {...state,customer:actions.payload.data}
  
        default:
            return state
    }
  }
  export const getApiJsonActions = (payload) => ({type:'getApiJson', payload})
  export const getApiJsonSingleActions = (payload) => ({type:'getApiJsonSingle', payload})

