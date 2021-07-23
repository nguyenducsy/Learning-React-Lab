import React from 'react';
import MotItem from './MotItemCart'
class ListInCart extends React.Component {
    constructor(props){
        super();
    }
    render (){
        return (
            JSON.parse(localStorage.getItem("listcart")).map((p,idx)  => {
                return  <MotItem key= {idx} item = {p} formatPrice = {this.props.format} />
            })
    
        );
};
}

export default ListInCart;