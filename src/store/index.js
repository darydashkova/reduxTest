import {  createStore, combineReducers, applyMiddleware} from 'redux'
import { reducer } from './reducer'
import { composeWithDevTools  } from '@redux-devtools/extension';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    customer:reducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

