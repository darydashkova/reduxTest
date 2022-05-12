import {  createStore, combineReducers, applyMiddleware} from 'redux'
import { reducer } from './reducer'
import { composeWithDevTools  } from '@redux-devtools/extension';
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    customer:reducer
})
// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

