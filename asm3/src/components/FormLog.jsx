import React from 'react';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { FacebookLogout } from 'react-facebook-login';
import {useState} from 'react'
import  FormLogFB   from './FormlogFB'
import Content_Home from './Content_Home';
import { connect } from 'react-redux';

import { BrowserRouter, Route, Link, Redirect  } from 'react-router-dom';




function FormLog (props) {

    const responseFacebook = (response) => {
        console.log(response);
      }
       
    
    const [dangNhapChua, ganTrangThaiDangNhap] = useState(false);
    const [userInfo, ganuserInfo] = useState( {tokenId:'', hoten:'', email:'' , img: ''} );


  

    const NutGoogle = (props) => {
        let code;
        console.log(dangNhapChua);
        if  (dangNhapChua===false) code= <NutDangNhap/>
        else { 

            code =  <NutThoat/>
   
        }
        return (code);
     }

    //  const NutFacebook = (props) => {
    //     let code;
    //     // console.log(dangNhapChua);
    //     if  (dangNhapChua===false) code= <NutDangNhapFB/>
    //     else { 

    //         code =  <NutThoat/>
   
    //     }
    //     return (code);
    //  }
     
 const NutDangNhap = () =>{
    return (
  <GoogleLogin
      clientId="650061717314-m60a3dm92k0gu990bi0hbiriddmc9etp.apps.googleusercontent.com"
      buttonText="Đăng nhập"
      onSuccess={dangNhhapThanhCong} onFailure={dangNhapThatBai}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
   />
    );
  }
  // const NutDangNhapFB = () =>{
  //   return (
  //    <FacebookLogin
  //         appId="974577360001245"
  //         autoLoad={true}
  //         fields="name,email,picture"
  //         onClick={""}
  //         buttonText="Đăng nhập"
  //         isSignedIn={true}
  //         icon="fa-facebook"
  //         callback={responseFacebook} /> 
          
  //   );
  // }

  const NutThoat = () =>{
    return (
          <GoogleLogout
              clientId="650061717314-m60a3dm92k0gu990bi0hbiriddmc9etp.apps.googleusercontent.com"
              buttonText="Thoát" onLogoutSuccess={thoat}  
            />
    );}
  const dangNhhapThanhCong = (response) => {
    
    ganTrangThaiDangNhap(true);
    <Route exact path="/login" render={() => (
        dangNhapChua ? (<Content_Home/>): (<Redirect to="/"/>)         
        )}/>
    ganuserInfo({         
        tokenId:response.tokenId, 
        hoten:response.profileObj.name,
        email: response.profileObj.email,
        img: response.profileObj.imageUrl
    })    
  }  
  localStorage.setItem('info', JSON.stringify(userInfo));
  
  const thoat = (response) => {    
    ganTrangThaiDangNhap(false);
    ganuserInfo({tokenId:'',hoten:'',email: '' , img: ''})
    alert('Đã thoát!!')
  }
  
  
  const dangNhapThatBai = (response) => { 
    console.log("Đăng nhập thất bại", response);  
  }
  
        return (
        <>
        <div className="formgiua">
        <div id="formContainer" className="dn">
        <div className="formLeft">
        <img src="https://billboardvn.vn/wp-content/uploads/2021/05/D1-1.jpg"/>
        </div>
        <div className="formRight">
            <form id="login">
                <header>
                    <h1>Login</h1>
                    <p>Login to continue</p>
                </header>
                <section className="forrm">
                    <label>
                        <p>Username</p>
                        <input type="text"  placeholder=" "  formControlName="username" required minlength = "23"/>
                        <div className="border"></div>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" placeholder=" "  formControlName="pass"/>
                        <div className="border"></div>
                    </label>
                    <button className="nutdangnhap"type="submit">Login</button>
                    <label className="gglog">
                    <NutGoogle/>
                    </label>
                    <br/>
                    <label className="falog">
                    {/* <NutFacebook/> */}
                    <FormLogFB/>
                        {/* <div>
                            <span>
                   
                        </span>
                        </div> */}
                    </label>
                </section>
           
                <footer>    
                    {/* <button type="button" className="forgotBtn">Forgot password?</button> */}
              <button type="button" className="registerBtn">       <Link to="register">   <a className="nav-link">Need an account?</a></Link> </button>
                </footer>
            </form> 
        </div>
        </div>
        </div>
        </>
        );
}


export default  (FormLog);
