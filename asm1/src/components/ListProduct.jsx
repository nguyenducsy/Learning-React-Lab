import React from 'react';
import MotPro from './MotProduct'
class ListProduct extends React.Component {
    constructor(props){
        super();
        const {listPro} = props;
        console.log(props);
        this.state={quatityChecked:0, idProChecked:[]}
    }
    choosePro=(idPro) => {  
        this.state.idProChecked.push(idPro);
        this.state.quatityChecked++;
        this.props.ShowCarts(idPro);
    }
   
    render() {
        return (
            this.props.listPro.map((p,idx)  => {
                return  <MotPro choosePro = {this.choosePro}  key= {idx} pro = {p} formatPrice = {this.props.format}/>
            })
        );
    };
}

export default ListProduct;