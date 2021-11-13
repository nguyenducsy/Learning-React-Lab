// src/reducers/indexReducer.js
import { combineReducers } from 'redux'
import sachReducer from './sachReducer';
import loaisachReducer from './loaisachReducer';
import tienteReducer from './tienteReducer';
export default combineReducers({
    loaisach: loaisachReducer,
    sach: sachReducer,
    tiente: tienteReducer,
})