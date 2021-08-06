import React from 'react';

class Cart extends React.Component {
    constructor(props){
        super();
        console.log(props);
         
    }

    	//format 
	formatter = new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
		minimumFractionDigits: 0
	  })
    render() {
        const kq = 
        <>
             <tr className="cart_item">
                                            <td className="product-remove">
                                                <button type="button" onClick={() => this.props.GetProByID(this.props.item.id)}>
                    
                                                <a  className="remove">&times;</a>
                                                </button>
                                            </td>
                                            <td className="product-thumbnail">
                                                <a href="#">
                                                    <img width="200" height="200" src={this.props.item.urlPic} alt="p7" />
                                                </a>
                                            </td>
                                            <td className="product-name">
                                                <a href="#">{this.props.item.name} </a>
                                            </td>
                                            <td className="product-price text-center">
                                                <span className="amount">{this.formatter.format(this.props.item.price)}</span>
                                            </td>
                                            <td className="product-quantity text-center">
                                                <div className="quantity">
                                                    <input type="number" value="1" title="Qty" className="input-text qty text" size="4" />
                                                </div>
                                            </td>
                                            <td className="product-subtotal text-center">
                                            <span className="amount">{this.formatter.format(this.props.item.price)}</span>
                                            </td>
                                        </tr>            
        </>
        return (kq)
    };
}

export default Cart;