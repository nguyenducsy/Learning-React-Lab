import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hientin1 from './component/hientin1';
import Tinmoi from './component/tinmoi'
import Tinxemnhieu from './component/tinxemnhieu'
import Thohay from './OOP/Thơ hay'
import TheThao from './OOP/Thể thao'
import TinNew from './OOP/TinMoi'
import Pagedetail from './component/pagedetail'

ReactDOM.render( < Hientin1 tin = { TheThao[0] }/> , document.getElementById("col1"))
ReactDOM.render( < Hientin1 tin = { TheThao[1] }/> , document.getElementById("col2"))
ReactDOM.render( < Hientin1 tin = { TheThao[2] }/> , document.getElementById("col3"))
ReactDOM.render( < Hientin1 tin = { TheThao[3] }/> , document.getElementById("col4"))
ReactDOM.render( < Tinxemnhieu listTin = { Thohay }/> , document.getElementById("txn"))
 
const params = new URLSearchParams(window.location.search);
let id = params.get('id');
console.log(id);

// ReactDOM.render( <Pagedetail />, document.getElementById('tinmoi'));
if (id == null) {
    ReactDOM.render( < Tinmoi tinNew = { TinNew }/> , document.getElementById("tinmoi"))
}
else 
{
    var tin = TinNew.find(function(tin, index){
        if(tin.id === id) return true;
    })
    if(tin!= undefined) ReactDOM.render( <Pagedetail  tin ={tin} />, document.getElementById('tinmoi'))
}


reportWebVitals()