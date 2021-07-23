import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DetailProduct from './components/DetailProduct'
import Cart from './components/MotItemCart'
import ListPro from './components/ListProduct'
import ListInCart from './components/ListInCart'
import ArrProduct from './components/product.js'
import Content_Home from './components/Content_Home'
import Content_Cart from './components/Content_Cart';

console.log(ArrProduct);
const ListCart = [];
let ProCart_new = "";
const praram = new URLSearchParams(window.location.search)
let home = praram.get("home")
let id = praram.get("id");

   //format 
   const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  })

  function ShowCarts(idPro){
    let no = 1;
    let row = '';
    let ProCart = ArrProduct.find((pro,index) =>{
        if (pro.id === idPro) return true;
    } )
  
    if(ProCart==null) { alert("Không có sản phẩm này!"); return; }

    else {
    //   const Item_local =  JSON.parse(localStorage.getItem('listcart'));
    //   console.log(Item_local);
    //   if (Item_local=== null) {
    //     ListCart.push(ProCart);
    // } else {
   
          ListCart.push(ProCart);
         localStorage.setItem('listcart' , JSON.stringify(ListCart));
        // Item_local.map( p => {
          // if (idPro===p.id) {
          //   no += 1;
          // }
          // localStorage.setItem("no" , no);
        // });
        // console.log(Item_local);
        
        // Item_local.push(ProCart);
 
        // for (let i = 0; i < ListCart.length; i++) {
          // ListCart[i] = "";
          // let p = ListCart[i];
  
          
            // if(p.id[i] == idPro){
            //   console.log("jj");
              
              // ProCart_new = {
              //   id: p.id,
              //   name: p.name,
              //   price: p.price * no,
              //   urlPic: "./images/aothunnam/3.jpg",
              //   urlPic2: "./images/aothunnam/3_1.jpg",
              //   des: p.des,
              //   idLoai: p.idLoai,
              //   new: p.new,
              //   hot: p.hot,
              //   star: 3.5,
              //   sale: 0,
              //   view: 1,
              //   no: no + 1
              // }
              // localStorage.removeItem("listcart");
      
              // localStorage.setItem('listcart' , JSON.stringify(ProCart_new));
            // }
            // else       localStorage.setItem('listcart' , JSON.stringify(ProCart));
            // localStorage.setItem('listcart' , []);
            // localStorage.setItem('listcart' , []);
            // const Item_local =  JSON.parse(localStorage.getItem('listcart'));
            // if (Item_local==="") {
              // Item_local = [];
                      // row += 'No item in cart';
              // ListCart.push(Item_local)
              // localStorage.setItem('listcart' , JSON.stringify(ListCart));
            //   Item_local.push(ProCart)
            //   localStorage.setItem('listcart' , JSON.stringify(Item_local));
            // }
          //   else  {    
          //       Item_local.push(ProCart)
          // ReactDOM.render( <Content_Cart/> , document.getElementById("router"));
          // ReactDOM.render( <ListInCart /> , document.getElementById("listInCart"));
        }
   
        ReactDOM.render( <Content_Home /> , document.getElementById('router')); //content chưa đổ dữ liệu 
        ReactDOM.render( < ListPro ShowCarts = {ShowCarts}  listPro = { ArrProduct } format = {formatter} /> , document.getElementById("listpro")); //đổ dữ liệu
    }


      // localStorage.setItem('listcart' , JSON.stringify(ProCart));
    // }
    // console.log(ListCart);
  // }}
if(home === null){
  ReactDOM.render( <Content_Home /> , document.getElementById('router')); //content chưa đổ dữ liệu 
  ReactDOM.render( < ListPro ShowCarts = {ShowCarts}  listPro = { ArrProduct } format = {formatter} /> , document.getElementById("listpro")); //đổ dữ liệu
}

if(home === "cart"){
  ReactDOM.render( <Content_Cart  formatt = {formatter} /> , document.getElementById("router"));
  ReactDOM.render( <ListInCart format = {formatter} /> , document.getElementById("listInCart"));
}
// if(home === "login"){
//   ReactDOM.render(
//     <Login/> , document.getElementById("root/")
//   )
// }
if (id == null) {
  ReactDOM.render( <Content_Home /> , document.getElementById('router')); //content chưa đổ dữ liệu 
  ReactDOM.render( < ListPro ShowCarts = {ShowCarts}  listPro = { ArrProduct } format = {formatter} /> , document.getElementById("listpro")); //đổ dữ liệu
}
else 
{
  var pro = ArrProduct.find(function(pro, index){
      if(pro.id === id) return true;
  })

 ReactDOM.render( <DetailProduct  Pro ={pro} />, document.getElementById('router'))
}

//?home=detail&id=6
// if(home === "detail"){
//   const detail = new URLSearchParams(window.location.search)
//   let id = detail.get("id")
//   ReactDOM.render(
//     <DetailProduct/> , document.getElementById("router")
//   )
// }



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
