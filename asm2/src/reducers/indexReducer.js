// src/reducers/indexReducer.js
import { combineReducers } from 'redux'
import productReducer from './productReducer';
import loaisachReducer from './catalogReducer';
import tienteReducer from './tienteReducer';
export default combineReducers({
    catalog: loaisachReducer,
    product: productReducer,
    tiente: tienteReducer,
})