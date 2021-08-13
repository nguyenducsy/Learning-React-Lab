
import './App.css';
import React from 'react'
import { Redirect } from 'react-router';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link  } from 'react-router-dom'
import TrangChu from './components/TrangChu';
import GioHang from './components/GioHang';
import List_Sach from './components/ListSach';
// import ThemSach from './components/ThemSach'
import { connect } from 'react-redux'
import { actDuaSachVaoStore } from './actions/actSach'
import LienHe from './components/LienHe';
import DownLoad from './components/DownLoad'
import TienTe from './components/TienTe'
//login with google 
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import {useState} from 'react'

function App(props) {

  React.useEffect(() => {
    let url ="http://localhost:3500/sach";
    fetch(url).then(res => res.json().then(data => {
      console.log(data);
      props.DuaSachVaoStore(data);
      console.log(data);
    }))
  } , [])

  const [dangNhapChua, ganTrangThaiDangNhap] = useState(false);
  const [userInfo, ganuserInfo] = useState( {tokenId:'', hoten:'', email:'' , img: ''} );

  const NutGoogle = (props) => {
    let code;
    console.log(dangNhapChua);
    if  (dangNhapChua===false) code= <NutDangNhap/>
    else { code = 
      <> 
              <img className="imgurl" src={userInfo.img} alt=""/>
           <div className="info"> <p>Họ Tên: {userInfo.hoten} </p>
                    <p>Email: {userInfo.email} </p>
                    <NutThoat/>
          </div>
      </>
    }
    return (code);
 }

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


const NutThoat = () =>{
  return (
        <GoogleLogout
            clientId="650061717314-m60a3dm92k0gu990bi0hbiriddmc9etp.apps.googleusercontent.com"
            buttonText="Thoát" onLogoutSuccess={thoat}  
          />
  );}
const dangNhhapThanhCong = (response) => {
  ganTrangThaiDangNhap(true);
  ganuserInfo({         
      tokenId:response.tokenId, 
      hoten:response.profileObj.name,
      email: response.profileObj.email,
      img: response.profileObj.imageUrl
  })    
}  
const thoat = (response) => {    
  ganTrangThaiDangNhap(false);
  ganuserInfo({tokenId:'',hoten:'',email: '' , img: ''})
  alert('Đã thoát!!')
}


const dangNhapThatBai = (response) => { 
  console.log("Đăng nhập thất bại", response);  
}


    return (
      <BrowserRouter>
      <div className="container">
        <header>
            <nav>
              <Link to='/'>Trang chủ</Link>
              <Link to='/about'>Liên hệ</Link>
              <Link to='/cart'>Giỏ hàng</Link>
              <Link to='/list_sach'>Sản phẩm</Link>
              <Link to='/download'>Download</Link>
            </nav>
            <div className="right">Tổng số sách : {props.sach.length} </div>
            <div className="right"><TienTe/></div> 
        </header>
        <main>
            <article>
              <Route path='/' exact component={TrangChu} />
              <Route path='/about' component={LienHe} />
              <Route path='/cart' component={GioHang} />
              <Route path="/list_sach" exact component={List_Sach}/>
              <Route exact path="/download" render={() => (
                dangNhapChua ? (<DownLoad/>): (<Redirect to="/"/>)         
                )}/>
            </article>
            <aside>
            <NutGoogle/>
            {/* <ThemSach/> */}
            </aside>
        </main>    
        <footer>FOOTER</footer>
      </div>
      </BrowserRouter>
    );

}

const mapState = (state) => {
  return {sach : state.sach}
}
  const mapDispatch = (dispatch) => {
    return {
      DuaSachVaoStore: (arrSach) => {
        dispatch(actDuaSachVaoStore(arrSach));
      },
    };
  };

  
  export default connect(mapState, mapDispatch)(App);
  
