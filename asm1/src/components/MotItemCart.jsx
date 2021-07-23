import React from 'react';

class Cart extends React.Component {
    constructor(props){
        super();
        console.log(props);
        
        
    }
    render() {
        const kq = 
        <>
             <tr class="cart_item">
                                            <td class="product-remove">
                                                <a href="#" class="remove">&times;</a>
                                            </td>
                                            <td class="product-thumbnail">
                                                <a href="#">
                                                    <img width="200" height="200" src={this.props.item.urlPic} alt="p7" />
                                                </a>
                                            </td>
                                            <td class="product-name">
                                                <a href="#">{this.props.item.name} </a>
                                            </td>
                                            <td class="product-price text-center">
                                                <span class="amount">{this.props.formatPrice.format(this.props.item.price)}</span>
                                            </td>
                                            <td class="product-quantity text-center">
                                                <div class="quantity">
                                                    <input type="number" value="1" title="Qty" class="input-text qty text" size="4" />
                                                </div>
                                            </td>
                                            <td class="product-subtotal text-center">
                                            <span class="amount">{this.props.formatPrice.format(this.props.item.price)}</span>
                                            </td>
                                        </tr>
                                    
        </>
        return (kq)
    };
}

export default Cart;