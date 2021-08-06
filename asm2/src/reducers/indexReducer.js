// src/reducers/indexReducer.js
import { combineReducers } from 'redux'
import productReducer from './productReducer';
import loaisachReducer from './productReducer';
export default combineReducers({
    catalog: loaisachReducer,
    product: productReducer,
})