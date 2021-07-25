import React from 'react';

class ContentCart extends React.Component {
    constructor(props){
    super();
    this.state = {total:0}
    const item = JSON.parse(localStorage.getItem("listcart"));
    
    if (item !== null) {
        item.map(p => {
            this.state.total += p.price;
        })
    }
 
    
}
    render() {
        return (

            <div>
        <div className="heading-container ">
            <div className="container heading-standar">
                <div className="heading-wrap">
                    <div className="page-breadcrumb clearfix">
                        <div className="pull-left">
                            <ul className="breadcrumb">
                                <li>
                                    <a href="#" className="home"><span>Home</span></a>
                                </li>
                                <li><span>Shopping Cart</span></li>
                            </ul>
                        </div>
                        <div className="heading-info pull-right">
                            <em>Call us</em>&nbsp;&nbsp;
                            <i className="fa fa-phone"></i> +01 234 5679&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="mailto:email@domain.com">
                                <i className="fa fa-envelope-o"></i>
                                <span>email@domain.com</span>
                            </a>
                        </div>
                    </div>
                    <div className="page-title">
                        <h1>Shopping Cart</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="content-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 main-wrap">
                        <div className="main-content">
                            <div className="shop">
                                <table className="table table-bordered shop_table cart">
                                    <thead>
                                        <tr>
                                            <th className="product-remove">&nbsp;</th>
                                            <th className="product-thumbnail">&nbsp;</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price text-center">Price</th>
                                            <th className="product-quantity text-center">Quantity</th>
                                            <th className="product-subtotal text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody id="listInCart">
                                       <tr>
                                            <td colspan="6" className="actions">
                                                <div className="coupon">
                                                    <label>Coupon:</label>
                                                    <input type="text" name="coupon_code" className="input-text" placeholder="Coupon code" />
                                                    <input type="submit" className="button" name="apply_coupon" value="Apply Coupon" />
                                                </div>
                                                <input type="submit" className="button" name="update_cart" value="Update Cart" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="cart-collaterals">
                                    
                                    <div className="cart_totals ">
                                        <h2>Cart Totals</h2>
                                        <table>
                                            <tr className="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td>             
                                                    <span className="amount"> {this.props.formatt.format(this.state.total)}</span>
                                                </td>
                                            </tr>
                                            <tr className="shipping">
                                                <th>Shipping</th>
                                                <td>
                                                    Free Shipping <br />
                                                    <a href="#" className="shipping-calculator-button">Calculate Shipping</a>
                                                </td>
                                            </tr>
                                            <tr className="order-total">
                                                <th>Total</th>
                                                <td>
                                                    <strong><span className="amount"> {this.props.formatt.format(this.state.total)}</span></strong>
                                                </td>
                                            </tr>
                                        </table>
                                        <div className="checkout-actions">
                                            <a href="#" className="checkout-button button wc-forward">Proceed to Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )};
}

export default ContentCart;