// src/reducers/indexReducer.js
import { combineReducers } from 'redux'
import productReducer from './productReducer';
import loaisachReducer from './catalogReducer';
export default combineReducers({
    catalog: loaisachReducer,
    product: productReducer,
})