
import './App.css';
import React from 'react'
import { BrowserRouter, Route, Link  } from 'react-router-dom'
import TrangChu from './components/TrangChu';
import GioHang from './components/GioHang';
import List_Sach from './components/ListSach';
import { connect } from 'react-redux'
import { actDuaSachVaoStore } from './actions/actSach'
import LienHe from './components/LienHe';
import ThemSach from './components/ThemSach';

function App(props) {
  React.useEffect(() => {
    let url ="http://localhost:3500/sach";
    fetch(url).then(res => res.json().then(data => {
      props.DuaSachVaoStore(data);
    }))
  } , [])
    return (
      <BrowserRouter>
      <div className="container">
        <header>
            <nav>
              <Link to='/'>Trang chủ</Link>
              <Link to='/about'>Liên hệ</Link>
              <Link to='/cart'>Giỏ hàng</Link>
              <Link to='/list_sach'>Sản phẩm</Link>
            </nav>
        </header>
        <main>
            <article>
              <Route path='/' exact component={TrangChu} />
              <Route path='/about' component={LienHe} />
              <Route path='/cart' component={GioHang} />
              <Route path="/list_sach" exact component={List_Sach}/>
            </article>
            <aside>
              <ThemSach/>
            </aside>
        </main>    
        <footer>FOOTER</footer>
      </div>
      </BrowserRouter>
    );
  }
  
  const mapDispatch = (dispatch) => {
    return {
      DuaSachVaoStore: (arrSach) => {
        dispatch(actDuaSachVaoStore(arrSach));
      },
    };
  };
  export default connect(null, mapDispatch)(App);
  
