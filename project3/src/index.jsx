import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HienGioHang from './component/HienGioHang'
import ListSach from './component/ListSach'
import reportWebVitals from './reportWebVitals';
import arrSach from './component/SachList'

// console.log(arrSach);
const sachDaChon = [];

ReactDOM.render(
  <App />, document.getElementById('root')
);

ReactDOM.render(
   <ListSach capNhatGioHang={capNhatGioHang} caption = "Sách bán chạy" listSach = {arrSach} />,
   document.getElementById('sachBanChay')
);

function capNhatGioHang(idSach){
   let sachChon = arrSach.find((sach,index)=> {
      if(sach.id===idSach) return true;
   })
   if(sachChon==null) { alert("Không có sách này"); return; }
   else sachDaChon.push(sachChon);
   
   function deleSach(){
      ReactDOM.render(
          null ,
          document.getElementById("divCart")
      );
  }
   ReactDOM.render(
      <HienGioHang sachDaChon={sachDaChon} />,
      document.getElementById("divCart")
   );
}

reportWebVitals();
