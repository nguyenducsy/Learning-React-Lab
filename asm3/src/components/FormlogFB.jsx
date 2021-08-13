import React from 'react';

import FacebookLogin from 'react-facebook-login';
import { FacebookLogout } from 'react-facebook-login';
import {useState} from 'react'

import { BrowserRouter, Route, Link, Redirect  } from 'react-router-dom';

function FormLogFB (props) {

    const responseFacebook = (response) => {
        console.log(response);

        const info = JSON.parse(localStorage.getItem('info'));



      }
       
    const [dangNhapChua, ganTrangThaiDangNhap] = useState(false);
    const [userInfo, ganuserInfo] = useState( {tokenId:'', hoten:'', email:'' , img: ''} );


     const NutFacebook = (props) => {
        let code;
        // console.log(dangNhapChua);
        if  (dangNhapChua===false) code= <NutDangNhapFB/>
        else { 

            code =  <NutThoat/>
   
        }
        return (code);
     }
     
     const NutThoat = () =>{
        return (
              <>
              Hello
              </>
                
        );}
  const NutDangNhapFB = () =>{
    return (
     <FacebookLogin
          appId="267408301482030"
          autoLoad={true}
          fields="name,email,picture"
          onClick={""}
          buttonText="Đăng nhập"
          isSignedIn={true}
          icon="fa-facebook"
          callback={responseFacebook} /> 
          
    );
  }
        return (
        <>
        <NutFacebook/>
        </>
        );
}

export default FormLogFB;