import './Admin.css';
import React from 'react'
import ReactDOM from 'react-dom';
import ListLoaiSach from './adminComponents/listLoaiSach';
import SuaLoaiSach from './adminComponents/suaLoaiSach'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import ListSach from './adminComponents/ListSach';
import SuaSach from './adminComponents/suaSach'
import HienSach from './adminComponents/hienSach'
import ThemLoai from './adminComponents/themLoai';
import ThemSach from './adminComponents/themSach';

const addLoai = () => {
  ReactDOM.render(
    <ThemLoai/>, document.getElementById('updateForm')
  );
}

const addSach = () => {
  ReactDOM.render(
    <ThemSach/>, document.getElementById('updateForm')
  );
}

const updateLoaiSach = (loaisach) => {
  ReactDOM.render(
    <SuaLoaiSach caption="FORM SỬA LOẠI SÁCH" loaisach={loaisach}/>, document.getElementById('updateForm')
  );
}
const updateSach = (sach) => {
  ReactDOM.render(
    <SuaSach caption="FORM SỬA SÁCH" sach={sach}/>, document.getElementById('updateForm')
  );
}
function App() {
  return (
    <BrowserRouter>
                <div className="content-container shop">
            <div className="container">
    <div className="box">
      {/* <header className> */}
          <nav>
            <Link to='/loai'>Quản lý danh mục</Link>
            <span>    |        </span>
            <Link to='/sanpham'>Quản lý sản phẩm</Link>
          </nav>
      {/* </header> */}
      <main>
          <article>
            <Route exact path='/loai' render={()=><ListLoaiSach capnhat={updateLoaiSach} themloai={addLoai}/>}></Route>
            <Route exact path='/sanpham' render={()=><ListSach capnhat={updateSach}  themsach={addSach}/>}></Route> 
            <Route path='/xemsach/:id' render={()=><HienSach/>}></Route> 
          </article> 
          <aside>
            <div id="updateForm"></div>
          </aside>
      </main>    
  </div>
  </div>
  </div>
    </BrowserRouter>
  );
}
export default App;
