import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header'
import Footer from './components/footer'
import Menu from './components/menu'
import Noidungchinh  from './components/noidungchinh'

    ReactDOM.render( < Header /> , document.getElementById("header"))
    ReactDOM.render( < Menu /> , document.getElementById("menu"))
    ReactDOM.render( < Noidungchinh /> , document.getElementById("root"))
    ReactDOM.render( < Footer /> , document.getElementById("footer"))

reportWebVitals();