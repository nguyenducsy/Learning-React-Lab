import React from 'react';
import MotItem from './MotItemCart'
class ListInCart extends React.Component {
    constructor(props){
        super();
        this.state = {list: ''}
        const listcart = JSON.parse(localStorage.getItem("listcart"));
     
            this.state.list = listcart
 
    }
    render (){

         if  (this.state.list === null)  return <></>

         else{  
            return (
                this.state.list.map((p,idx) => {      
                return  <MotItem key= {idx} item = {p} formatPrice = {this.props.format} />
                })
            );
        };
};
}

export default ListInCart;