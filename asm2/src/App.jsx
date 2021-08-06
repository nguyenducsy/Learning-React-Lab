import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link  } from 'react-router-dom'

// import reportWebVitals from './reportWebVitals';
// import DetailProduct from './components/DetailProduct'
// import Cart from './components/MotItemCart'
// import ListPro from './components/ListProduct'
// import ListInCart from './components/ListInCart'
// import ArrProduct from './components/product.js'
import Content_Home from './components/Content_Home'
// import Content_Cart from './components/Content_Cart';
// import ListProHot from './components/ListProductHOT'
// import ListProChay from './components/ListProductBANCHAY'
// import Category from './components/category'
// import Account from './components/FormLog';
import { connect } from 'react-redux'
import { actDuaSPVaoStore } from './action/actPro'
// import Register from './components/FormRegister';
// import FormComment from './components/Comment';
// import ListComment from './components/ListComment'

function App(props) {
  React.useEffect(() => {
    let url ="http://localhost:3500/product";
    fetch(url).then(res => res.json().then(data => {
      console.log(data);
      // props.DuaSPVaoStore(data);
    }))
  } , [])

    return ( 
        <>
        Helo
        </>

 
	
    );
}

// const mapDispatch = (dispatch) => {
//     return {
//       DuaSPVaoStore: (arrPro) => {
//         dispatch(actDuaSPVaoStore(arrPro));
//       },
//     };
//   };
export default App;
  // export default connect(null, mapDispatch)(App);