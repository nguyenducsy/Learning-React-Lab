import React from 'react';
import MotPro from './MotProduct'
import { BrowserRouter, Route, Link  } from 'react-router-dom';
import { connect } from 'react-redux'; 
import ShowCarts from './ShowCart'
import no from './no'

class ListProduct extends React.Component {
    constructor(props){
        super();
        this.state = {listPro: [] , param: "" , id: '' };
        // const {listPro} = props;
        this.state={quatityChecked:0, idProChecked:[]}
        console.log(props);
        this.state.param =  new URLSearchParams(window.location.search);
        this.state.id = this.state.param.get("idloai");
        console.log(this.state.id);
    }
    choosePro=(idPro) => { 
        alert("Đã thêm vào giỏ")
        this.state.idProChecked.push(idPro);
        this.state.quatityChecked++;     
        ShowCarts(idPro,this.props.listPro)
        window.location.reload()
        no()
    }

    render() {
        let idloai = this.state.id  ;
        console.log(idloai);
        if (this.state.listPro !="") {
        return (
            this.props.listPro.map((p)  => {
                if ( parseInt(idloai) === p.idLoai ){
                    return   <MotPro choosePro = {this.choosePro}   pro = {p}  />
                }
                else if ( idloai === null ) {
       
                    return  <MotPro choosePro = {this.choosePro}   pro = {p}  />
                }
            })
         );
        }
    };
}
const mapState = (state) => {  
    return { listPro : state.product, }; 
  };
export default connect(mapState, null)(ListProduct);
