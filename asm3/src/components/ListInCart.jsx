import React from 'react';
import MotItem from './MotItemCart'
import { connect } from 'react-redux';
import no from './no'

class ListInCart extends React.Component {
    constructor(props){
        super();
        this.state = {list: ''}
        // const listcart = JSON.parse(localStorage.getItem("listcart"));
        this.state.list = props.listCart;    
        console.log(props.listCart);
    }

    render (){
        console.log(this.props.listCart);
                return  <MotItem />
};
}

const mapState = (state) => {
	return {listCart: state.cart,
			}
}

export default connect(mapState,null) (ListInCart);