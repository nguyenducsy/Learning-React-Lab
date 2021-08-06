import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/indexReducer"; //reducer thay đổi store
const storee = createStore(reducers); //Tạo store

ReactDOM.render(
  <React.StrictMode>
    <Provider storee={storee}>
      <App  />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")

);

// const ListCart = [];
// let ProCart_new = "";
// const praram = new URLSearchParams(window.location.search)
// let home = praram.get("home")
// let id = praram.get("id");

//    //format 
//    const formatter = new Intl.NumberFormat('vi-VN', {
//     style: 'currency',
//     currency: 'VND',
//     minimumFractionDigits: 0
//   })

//   const Item_local =  JSON.parse(localStorage.getItem('listcart'));



//   function ShowCarts(idPro){
   
//     let row = '';
//     let ProCart = ArrProduct.find((pro,index) =>{
//         if (pro.id === idPro) return true;
//     } )

//     if(Item_local==null) { 
//       ListCart.push(ProCart);
//       // alert("Không có sản phẩm này!"); 
//       localStorage.setItem('listcart' , JSON.stringify(ListCart)) ;

//      }
//     else {

//       ListCart.push(ProCart);
//       if (ListCart !== "") {
//         Item_local.push(ProCart);
//         localStorage.setItem('listcart' , JSON.stringify(Item_local));
//       }
//       else {
//         Item_local.push(ProCart);
//         localStorage.setItem('listcart' , JSON.stringify(Item_local));
//         }
  
//       } 
//       return no();
//     }

//     function no(){
//       const Item_local_new =  JSON.parse(localStorage.getItem('listcart'));
//       let n = 0;
//       if (Item_local_new != null) {
//         n += Item_local_new.length;
//       }
//     ReactDOM.render( <nav>{n}</nav> , document.getElementById("numberCart"))
//   }

    
// if(home === null){
//   ReactDOM.render( <Content_Home /> , document.getElementById('router')); //content chưa đổ dữ liệu 
//   ReactDOM.render( < ListPro ShowCarts = {ShowCarts}  listPro = { ArrProduct } format = {formatter} /> , document.getElementById("listpro")); //đổ dữ liệu
//   ReactDOM.render( <ListProHot ShowCarts = {ShowCarts} format = {formatter} listHot = {ArrProduct}/> , document.getElementById("listProHot") );
//   ReactDOM.render( <ListProChay ShowCarts = {ShowCarts} format = {formatter} listChay = {ArrProduct}/> , document.getElementById("listProChay") );
//   no()
// }

// if (id == null) {
//   ReactDOM.render( <Content_Home /> , document.getElementById('router')); //content chưa đổ dữ liệu 
//   ReactDOM.render( < ListPro ShowCarts = {ShowCarts}  listPro = { ArrProduct } format = {formatter} /> , document.getElementById("listpro")); //đổ dữ liệu
//   no()
// }
// else 
// {
//   var pro = ArrProduct.find(function(p, index){
//       if(p.id === parseInt(id)) { 
//         ReactDOM.render( <DetailProduct ShowCarts = {ShowCarts}  pro = {p} format = {formatter}  />, document.getElementById('router'))
//         ReactDOM.render( <ListComment /> , document.getElementById("listComment"));
//         ReactDOM.render( <FormComment /> , document.getElementById("respond"));
//         ReactDOM.render( <ListProHot ShowCarts = {ShowCarts} format = {formatter} listHot = {ArrProduct}/> , document.getElementById("listProHot") );
//         ReactDOM.render( <ListProChay ShowCarts = {ShowCarts} format = {formatter} listChay = {ArrProduct}/> , document.getElementById("listProChay") );
      
//       };
//   })
  
// }

// if(home === "cart"){
//   ReactDOM.render( <Content_Cart  formatt = {formatter} /> , document.getElementById("router"));
//   ReactDOM.render( <ListInCart format = {formatter} /> , document.getElementById("listInCart"));
// }

// if(home === "login"){
//   ReactDOM.render(<Account/> , document.getElementById("router"));
// }
// if(home === "register"){
//   ReactDOM.render(<Register/> , document.getElementById("router"));
// }
// no();
console.log("Xem store:", storee.getState());

reportWebVitals();
