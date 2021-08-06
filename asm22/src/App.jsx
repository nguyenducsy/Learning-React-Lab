
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Content_Home from './components/Content_Home';
import Content_Cart from './components/Content_Cart'
import ListPro from './components/ListProduct'

import DetailProduct from './components/DetailProduct'
import Account from './components/FormLog';
import Register from './components/FormRegister'

import { BrowserRouter, Route, Link  } from 'react-router-dom';
import { actDuaSPVaoStore } from './action/actPro';
import { actDuaDMVaoStore } from './action/actCate';
import { connect } from 'react-redux';




function App(props) {
    React.useEffect(() => {
        let url ="http://localhost:3500/product";
        fetch(url).then(res => res.json().then(data => {         
          props.DuaSPVaoStore(data);

        }))
      } , [])
      React.useEffect(() => {
        let url ="http://localhost:3500/catalog";
        fetch(url).then(res => res.json().then(data => {         
          props.DuaDMVaoStore(data);

        }))
      } , [])

 

    
    
    return ( 
        <>
          <BrowserRouter>
          <Header/>
            <Route path='/' exact component={Content_Home} />
            <Route path='/cart' exact component={Content_Cart} />
      
            <Route path='/login' exact component={Account}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/detail/' exact component={DetailProduct}/>
          </BrowserRouter>   
      
        </>
    );
}




const mapDispatch = (dispatch) => {
    return {
      DuaSPVaoStore: (arrPro) => {
        dispatch(actDuaSPVaoStore(arrPro));
      },
      DuaDMVaoStore: (arrCate) => {
          dispatch(actDuaDMVaoStore(arrCate));
      }
    };
  };
  export default connect(null, mapDispatch)(App);



