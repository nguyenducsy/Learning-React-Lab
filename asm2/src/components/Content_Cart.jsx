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
                                    <a href="#" className="home"><span>Trang chủ</span></a>
                                </li>
                                <li><span>Giỏ hàng</span></li>
                            </ul>
                        </div>
                        <div className="heading-info pull-right">
                            <em>Liên hệ nhanh</em>&nbsp;&nbsp;
                            <i className="fa fa-phone"></i> +84 702 434 097&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="mailto:email@domain.com">
                                <i className="fa fa-envelope-o"></i>
                                <span> nguyenducsy08@gmail.com</span>
                            </a>
                        </div>
                    </div>
                    <div className="page-title">
                        <h1>GIỎ HÀNG</h1>
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
                                            <th className="product-name">Sản phẩm</th>
                                            <th className="product-price text-center">Giá</th>
                                            <th className="product-quantity text-center">Số lượng</th>
                                            <th className="product-subtotal text-center">Tổng</th>
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
                                        <h2>Tổng tiền</h2>
                                        <table>
                                            <tr className="cart-subtotal">
                                                <th>Tổng tiền hàng</th>
                                                <td>             
                                                    <span className="amount"> {this.props.formatt.format(this.state.total)}</span>
                                                </td>
                                            </tr>
                                            <tr className="shipping">
                                                <th>Chi phí vận chuyển</th>
                                                <td>
                                                    Miễn phí vận chuyển <br />
                                                    <a href="#" className="shipping-calculator-button">Tính toán vận chuyển</a>
                                                </td>
                                            </tr>
                                            <tr className="order-total">
                                                <th>Tổng thanh toán</th>
                                                <td>
                                                    <strong><span className="amount"> {this.props.formatt.format(this.state.total)}</span></strong>
                                                </td>
                                            </tr>
                                        </table>
                                        <div className="checkout-actions">
                                            <a href="#" className="checkout-button button wc-forward">Thủ tục thanh toán</a>
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