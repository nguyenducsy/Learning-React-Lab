import React from 'react';
import MotPro from './MotProduct'
import { connect } from 'react-redux'; 
import ShowCarts from './ShowCart'

import no from './no'
class ListProduct extends React.Component {
    constructor(props){
        super();
        this.state = {listPro: []};
        // const {listPro} = props;
        this.state={quatityChecked:0, idProChecked:[]}
        console.log(props);

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
        if (this.state.listPro!="") 
        return (
            this.props.listPro.map((p,idx)  => {
                if (p.idLoai  === 1){

                    return  <MotPro choosePro = {this.choosePro}   pro = {p}  />
                }
            })
        );
    };
}
const mapState = (state) => {  
    return { listPro : state.product, }; 
  };
export default connect(mapState, null)(ListProduct);
