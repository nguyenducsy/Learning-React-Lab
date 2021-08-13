// src/reducers/indexReducer.js
import { combineReducers } from 'redux'
import productReducer from './productReducer';
import loaisachReducer from './catalogReducer';
import cartReducer from './cartReductcer';
import tienteReducer from './tienteReducer';
// import loginReducer from './loginReducer';
export default combineReducers({
    catalog: loaisachReducer,
    product: productReducer,
    tiente: tienteReducer,
    cart: cartReducer,
    // login: loginReducer
})