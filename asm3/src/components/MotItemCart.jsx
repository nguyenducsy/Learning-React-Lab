import React from 'react';
import { connect } from 'react-redux';
import { actXoaCart } from '../action/actCart'

class Cart extends React.Component {
    constructor(props){
        super();
        console.log(props.listCart);
         
    }

    //format 
	formatter = new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
		minimumFractionDigits: 0
	  })
    render() {
        
        return (
            this.props.listCart.map((item, index) =>{
              

        return <>
             <tr className="cart_item">
                                            <td className="product-remove">
                                                <button type="button" onClick={() => this.props.xoaItem(item.id)}>
                    
                                                <a  className="remove">&times;</a>
                                                </button>
                                            </td>
                                            <td className="product-thumbnail">
                                                <a href="#">
                                                    <img width="200" height="200" src={item.urlPic} alt="p7" />
                                                </a>
                                            </td>
                                            <td className="product-name">
                                                <a href="#">{item.name} </a>
                                            </td>
                                            <td className="product-price text-center">
                                                <span className="amount">{this.formatter.format(item.price)}</span>
                                            </td>
                                            <td className="product-quantity text-center">
                                                <div className="quantity">
                                                    <input type="number" value={item.sl} title="Qty" className="input-text qty text" size="4" />
                                                </div>
                                            </td>
                                            <td className="product-subtotal text-center">
                                            <span className="amount">{this.formatter.format(item.price)}</span>
                                            </td>
                                        </tr>            
        </>
               })
        )
    };
}

const mapState = (state) => {
	return {listCart: state.cart,
		}
}
const mapDispatch = (dispatch) => {
    return {
        xoaItem : id => dispatch(actXoaCart(id))
    }
}
export default connect(mapState, mapDispatch) (Cart);