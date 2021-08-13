import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/indexReducer"; //reducer thay đổi store
const store = createStore(reducers); //Tạo store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App  />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
console.log("Xem store:", store.getState());
reportWebVitals();
