import React from 'react';
import { connect } from 'react-redux';
class MotProduct extends React.Component {
	constructor(props){
		super();
		this.state = {like:true  , caption:<img src="https://img.icons8.com/ios/50/fa314a/like--v1.png"/>};

		if (props.pro.sale===1) {
			this.sale = <span className="onsale">Sale</span>;
		}
	}

	formatter = new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
		minimumFractionDigits: 0
	  })
	giaSp = (gia) => {
		if (this.props.tiente.kyhieutien === 'usd') {
			return (gia/23000).toFixed(2) + ' USD' ;
		}
		else return this.formatter.format(gia)

	}
	//format 

	  
	disheart = () => {
		this.setState({like: !this.state.like});

		if (this.state.like===true) {
			this.setState({caption:<img src="https://img.icons8.com/ios-filled/50/fa314a/like--v1.png"/>})
		}
		else 	this.setState({caption:<img src="https://img.icons8.com/ios/50/fa314a/like--v1.png"/>})
		
	}
	
    render() {
		const kq = 
		<>
            		<li className="product">
					        <div className="product-container">
										<figure className={this.state.like? 'dislike' : 'like'}>
													<div className="product-wrap">
														<div className="product-images">
															{this.sale}
                                                            <div className="shop-loop-thumbnail shop-loop-front-thumbnail">
                                                                <img width="365" height="385"  src= {this.props.pro.urlPic} alt="hi"/>
                                                            </div>
                                                            <div className="shop-loop-thumbnail shop-loop-back-thumbnail">
                                                                <img width="365" height="385" src={this.props.pro.urlPic2} alt="hi"/>
                                                            </div>
                                                            <div className="yith-wcwl-add-to-wishlist">
																<button type="button" onClick={this.disheart}>
																	{this.state.caption}
																</button>
                                                            </div>
                                                            <div className="clear"></div>
														</div>
														<div className="shop-loop-actions">
															<a className="btbcart product_type_simple">
																<button type="submit"  onClick={() => this.props.choosePro(this.props.pro.id)}>
																	 <img src="https://img.icons8.com/material-sharp/24/ffffff/shopping-cart.png"/>
																</button>
															</a>
															<a className="btbcart" title="Quick shop" href={"/detail?id="+ this.props.pro.id}>
																<button type="button">
																	<img src="https://img.icons8.com/ios-glyphs/24/ffffff/search.png"/>
																</button>
															</a>
														</div>
													</div>
													<figcaption>
														<div className="shop-loop-product-info">
															<div className="info-title">
																<div className="product-category">
																	<a href="#" rel="tag">Shirts</a>, <a href="#" rel="tag">Tops &amp; Tunics</a>
																</div>
																<h3 className="product_title">
   																	 <a href={"/?id="+ this.props.pro.id}>{this.props.pro.name}</a>
																</h3>
															</div>
															<div className="info-meta">
																<div className="info-price">
																	<span className="price"> 
																		<ins>				
    																<span className="amount">Giá: {this.giaSp(this.props.pro.price)}</span>
																		</ins>
																		<del>
																	<span className="amount">{this.formatter.format(this.props.pro.price)}</span>
																		</del>
																	</span>
																</div>
																	<a href="https://icons8.com/icon/85185/star"></a>
																	<img src="https://img.icons8.com/material-rounded/24/4a90e2/star--v1.png"/>
																<div className="info-rating">
																	<div className="star-rating">
																		<span className={"star-rating-width" + this.props.pro.star*20}></span>
																	</div>
																</div>
															</div>
														</div>
													</figcaption>
							
													</figure>
											</div>
										</li>
        </>

		return (kq);
	}
	
}

const mapState = (state) => {
	return {tiente : state.tiente}
}
export default connect(mapState,null) (MotProduct);