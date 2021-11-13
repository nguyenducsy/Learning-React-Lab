
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import { Redirect } from 'react-router';
import Content_Home from './components/Content_Home';
import Content_Cart from './components/Content_Cart'
import ListPro from './components/ListProduct'
import TNang from './components/TinhNang';
import Admin from './Admin'
import DetailProduct from './components/DetailProduct'
import Account from './components/FormLog';
import Register from './components/FormRegister'



import { BrowserRouter, Route, Link  } from 'react-router-dom';
import { actDuaSPVaoStore } from './action/actPro';
import { actDuaDMVaoStore } from './action/actCate';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { FacebookLogout } from 'react-facebook-login';

import {useState} from 'react'


function App(props) {

  const responseFacebook = (respont) =>{
    console.log(respont);
  }
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

      const info = JSON.parse(localStorage.getItem('info'));
      let dangNhapChua = false;
      if (!info ) {
        dangNhapChua = false;
      }
      else dangNhapChua = true;


    return ( 
        <>
          <BrowserRouter>
          <Header/>
            <Route path='/' exact  component={Content_Home} />
            <Route path='/cart' exact component={Content_Cart} />
            <Route exact path="/tinhnang" component={TNang}/>
            <Route path='/login' exact component={Account}/>
            <Route exact  path="/admin/" render={() => (
                dangNhapChua ? (<Admin/>): (<Redirect to="/"/>)         
                )}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/detail' exact component={DetailProduct}/>
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



