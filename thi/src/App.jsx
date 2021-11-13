
import './App.css';
import React from 'react'
import { Redirect } from 'react-router';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link  } from 'react-router-dom'
import TrangChu from './components/TrangChu';
import List_Sach from './components/ListSach';
import ThemSach from './components/ThemSach'
import { actDuaSachVaoStore } from './actions/actSach'
import { connect } from 'react-redux'
import GioiThieu from './components/GioiThieu';
import TinTuc from './components/TinTuc'
import {useState} from 'react'

function App(props) {

  React.useEffect(() => {
    let url ="http://localhost:3500/tintuc";
    fetch(url).then(res => res.json().then(data => {
      props.DuaSachVaoStore(data);
      console.log(data);
    }))
  } , [])

    return (
      <BrowserRouter>
      <div className="container">
        <header className="bg-info" style={{height:'90px'}}>
            <nav>
              <Link to='/'>Trang chủ</Link>
              <Link to='/gioithieu'>Giới thiệu</Link>
              <Link to='/tintuc'>Tin Tức</Link>
            </nav>
        </header>
        <main style={{minHeight:'450px',display:'flex'}}>
            <article  className="col-sm-9 bg-light">
              <Route path='/' exact component={TrangChu} />
              <Route path='/gioithieu' component={GioiThieu} />
              <Route path='/tintuc' component={TinTuc} />
              {/* <Route path="/list_sach" exact component={List_Sach}/> */}
            </article>
            <aside className="col-sm-3 bg-secondary"> 
            <ThemSach/>
            </aside>
        </main>    
        <footer className="bg-dark" style={{height:'45px'}}>FOOTER</footer>
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
  
