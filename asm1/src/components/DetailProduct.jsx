import React from 'react';

class  DetailProduct extends React.Component  {
	constructor(props){
        super();
        this.state = {
            showYK: true
		}    
		console.log(props);
		
    }
    render() {
		return (
        <>
		 {/* {this.props.Pro.name || "Undefinded"} */}
		 <div className="heading-container ">
				<div className="container heading-standar">
					<div className="heading-wrap">
						<div className="page-breadcrumb clearfix">
							<div className="pull-left">
								<ul className="breadcrumb">
									<li>
										<a href="#" className="home"><span>Home</span></a>
									</li>
									<li><span>Single Product Sidebar</span></li>
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
							<h1>Single Product Sidebar</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="content-container">
				<div className="container">
					<div className="row">
						<div className="col-md-9 main-wrap">
							<div className="main-content">
								<div className="shop">
									<div className="product">
										<div className="row">
	                                        <div className="col-md-6 col-sm-6">
	                                            <div className="single-product-images">
	                                                <div className="caroufredsel product-images-slider" data-height="variable" data-visible="1" data-responsive="1" data-infinite="1">
	                                                    <a href="#" className="expand-button">
	                                                        <i className="fa fa-expand"></i>
	                                                    </a>
	                                                    <div className="caroufredsel-wrap">
	                                                        <ul className="caroufredsel-items">
	                                                            <li className="caroufredsel-item">
	                                                                <a href="images/product/product_detail.jpg" data-rel="magnific-popup" title="p11">
	                                                                    <img width="700" height="700" src="images/product/product1_front.jpg" alt="" />
	                                                                </a>
	                                                            </li>
	                                                            <li className="caroufredsel-item">
	                                                                <a href="images/product/product_detail.jpg" data-rel="magnific-popup" title="p12">
	                                                                    <img width="700" height="700" src="images/product/product2_front.jpg" alt="p12"/>
	                                                                </a>
	                                                            </li>
	                                                        </ul>
	                                                        <a href="#" className="caroufredsel-prev"></a>
	                                                        <a href="#" className="caroufredsel-next"></a>
	                                                    </div>
	                                                </div>
	                                                <div className="product-thumbnails-slider single-product-thumbnails" data-visible-max="4" data-visible-min="3" data-responsive="1" data-infinite="1">
	                                                    <div className="caroufredsel-wrap">
	                                                        <ul className="caroufredsel-items">
	                                                            <li className="caroufredsel-item">
	                                                                <div className="thumb">
	                                                                    <a href="#" data-rel="0" title="p11">
	                                                                        <img width="200" height="200" src="images/product/product1_front.jpg" alt="p11" title="p11"/>
	                                                                    </a>
	                                                                </div>
	                                                            </li>
	                                                            <li className="caroufredsel-item">
	                                                                <div className="thumb">
	                                                                    <a href="#" data-rel="1" title="p12">
	                                                                        <img width="200" height="200" src="images/product/product2_front.jpg" alt="p12"/>
	                                                                    </a>
	                                                                </div>
	                                                            </li>
	                                                        </ul>
	                                                        <a href="#" className="caroufredsel-prev"></a>
	                                                        <a href="#" className="caroufredsel-next"></a>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                        </div>
	                                        <div className="col-md-6 col-sm-6">
	                                            <div className="summary entry-summary">
	                                                <h1 className="product_title entry-title">Brown Printed</h1>
	                                                <div className="shop-product-rating">
	                                                    <div className="star-rating">
	                                                        <span width="90%"></span>
	                                                    </div>
	                                                    <a href="#reviews" className="shop-review-link">
	                                                        (<span className="count">2</span> customer reviews)
	                                                    </a>
	                                                </div>
	                                                <p>
	                                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
	                                                </p>
	                                                <p className="price"><span className="amount">&#36;20.00</span></p>
	                                                <form className="cart">
	                                                    <div className="quantity">
	                                                        <input type="number" step="1" min="1" name="quantity" value="1" className="input-text qty text" size="4"/>
	                                                    </div>
	                                                    <button type="submit" className="button">Add to cart</button>
	                                                </form>
	                                                <div className="add-to-wishlist-actions">
	                                                    <a href="#" className="add_to_wishlist"></a>
	                                                </div>
	                                                <div className="clear"></div>
	                                                <div className="product_meta">
	                                                    <span className="posted_in">
	                                                        Categories: <a href="#">Shirts</a>, <a href="#">Tops &amp; Tunics</a>.
	                                                    </span>
	                                                </div>
	                                                <div className="share-links">
	                                                    <div className="share-icons">
	                                                        <span className="facebook-share">
	                                                            <a href="#" title="Share on Facebook">
	                                                                <i className="fa fa-facebook"></i>
	                                                            </a>
	                                                        </span>
	                                                        <span className="twitter-share">
	                                                            <a href="#" title="Share on Twitter">
	                                                                <i className="fa fa-twitter"></i>
	                                                            </a>
	                                                        </span>
	                                                        <span className="google-plus-share">
	                                                            <a href="#" title="Share on Google +">
	                                                                <i className="fa fa-google-plus"></i>
	                                                            </a>
	                                                        </span>
	                                                        <span className="linkedin-share">
	                                                            <a href="#" title="Share on Linked In">
	                                                                <i className="fa fa-linkedin"></i>
	                                                            </a>
	                                                        </span>
	                                                    </div>
	                                                </div>
	                                            </div> 
	                                        </div>
	                                    </div>
	                                    <div className="tabbable tabs-primary tabs-top shop-tabs">
	                                        <ul className="nav nav-tabs" role="tablist">
	                                            <li className="active">
	                                                <a data-toggle="tab" role="tab" href="#tab-description">Description</a>
	                                            </li>
	                                            <li>
	                                                <a data-toggle="tab" role="tab" href="#tab-reviews">Reviews (2)</a>
	                                            </li>
	                                        </ul>
	                                        <div className="tab-content">
	                                            <div className="tab-pane active" id="tab-description">
	                                                <p>
                                                    Proin maximus egestas dui placerat vestibulum. Fusce congue enim ac metus facilisis imperdiet. Praesent non eros nunc. Aenean risus magna, volutpat sed tellus in, maximus auctor diam. Ut et ligula vel est cursus pretium. Integer non faucibus augue. Integer laoreet semper nunc, at tincidunt sem accumsan sed. Etiam eget finibus quam, vulputate laoreet nisi. Duis efficitur dolor eget nisl pellentesque accumsan. Donec pretium neque id auctor ornare. Ut elementum justo vitae ex dignissim consequat. Curabitur eget mi at felis lobortis suscipit. Aenean id libero porttitor, pretium lectus a, scelerisque neque. Fusce rutrum non arcu at placerat. Cras lobortis felis quis posuere viverra. Fusce ullamcorper eget felis at lobortis.
                                                </p>
                                                <p>
                                                    In pharetra et dui at dictum. Aliquam consequat volutpat sem, quis tempor libero porttitor non. Quisque quis est dictum, cursus purus ut, euismod magna. Sed dictum diam sit amet magna sollicitudin euismod. Praesent imperdiet vehicula est, vel fringilla libero venenatis sed. Sed vitae nulla iaculis, bibendum elit quis, sagittis metus. Cras vel nisi nec purus suscipit eleifend.
                                                </p>
                                                <p>
                                                    Curabitur nec magna in nulla placerat viverra ac ultricies orci. Curabitur vulputate in odio nec congue. Nam eu auctor nisi. Proin rutrum nulla sed maximus hendrerit. Nunc lacus augue, dictum eget sapien vel, finibus viverra augue. Quisque ac ligula in tortor consequat feugiat. Quisque placerat eget risus nec ullamcorper. Sed volutpat nisi in dui laoreet rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean semper, massa vel fermentum malesuada, justo nisi laoreet sem, vitae volutpat diam ex et velit. Quisque pellentesque orci aliquam, commodo diam quis, hendrerit felis. Fusce cursus elit ac ipsum condimentum, a tempor nulla consequat.
                                                </p>
                                                <p>
                                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum lacinia placerat tellus, quis mollis mauris congue a. Cras ultricies eleifend venenatis. Fusce non metus eros. Donec elementum leo porta facilisis luctus. Donec lobortis egestas pharetra. Integer eu purus eu velit pellentesque molestie. Mauris consequat leo nec justo venenatis semper. Nulla sed eros non justo mattis viverra ut et velit. Proin nec luctus odio. Vivamus in diam sed odio pretium luctus. In ornare hendrerit purus id volutpat. Nunc a velit quis est auctor pellentesque in sit amet ligula.
                                                </p>
                                                <p>
                                                    Sed non tellus vitae neque cursus maximus vitae non urna. Praesent sit amet sapien ultricies, dictum eros accumsan, luctus neque. Suspendisse elementum dolor quis risus commodo blandit. Mauris egestas malesuada bibendum. Duis ut enim imperdiet, euismod arcu id, viverra lectus. Integer libero sem, venenatis et venenatis sed, tristique a metus. Integer efficitur urna ac iaculis rhoncus. Vestibulum commodo semper ipsum sit amet porttitor. Suspendisse potenti. Praesent elementum tortor turpis, quis accumsan nulla sollicitudin sed. Praesent sed iaculis arcu. Aliquam id odio arcu. Aenean sed congue ligula. Vivamus ullamcorper placerat velit, tempor condimentum justo fringilla vitae. Donec tristique ac lorem efficitur viverra. Proin facilisis varius sem sit amet dictum.
                                                </p>
	                                            </div>
	                                            <div className="tab-pane" id="tab-reviews">
	                                                <div id="reviews">
	                                                    <div id="comments">
	                                                        <h2>2 reviews for Brown Printed</h2>
	                                                        <ol className="commentlist">
	                                                            <li className="comment">
	                                                                <div className="comment_container">
	                                                                    <img alt="" src="images/avatar/user-1.jpg" className="avatar" height="60" width="60" />
	                                                                    <div className="comment-text">
	                                                                        <div className="star-rating">
																			<span width="90%"></span>
	                                                                        </div>
	                                                                        <p className="meta">
	                                                                            <strong>Cobus Bester</strong> &ndash; <time datetime="2014-10-12T15:33:24+00:00">June 7, 2013</time>:
	                                                                        </p>
	                                                                        <div className="description">
	                                                                            <p>Wonderful quality, and an awesome design. WooThemes ftw!</p>
	                                                                        </div>
	                                                                    </div>
	                                                                </div>
	                                                            </li>
	                                                            <li className="comment">
	                                                                <div className="comment_container">
	                                                                    <img alt="" src="images/avatar/user-2.jpg" className="avatar" height="60" width="60" />
	                                                                    <div className="comment-text">
	                                                                        <div className="star-rating">
																			<span width="90%"></span>
	                                                                        </div>
	                                                                        <p className="meta">
	                                                                            <strong>Andrew</strong> &ndash; <time datetime="2014-10-12T15:33:24+00:00">June 7, 2013</time>:
	                                                                        </p>
	                                                                        <div className="description">
	                                                                            <p>This t-shirt is awesome! Would recommend to everyone!</p>
	                                                                            <p>I&#8217;m ordering mine next week</p>
	                                                                        </div>
	                                                                    </div>
	                                                                </div>
	                                                            </li>
	                                                        </ol>
	                                                        <div id="respond-wrap">
	                                                            <div id="respond" className="comment-respond">
	                                                                <h3 id="reply-title" className="comment-reply-title">
	                                                                    <span>Leave a reply</span>
	                                                                </h3>
	                                                                <form className="comment-form">
	                                                                    <p className="comment-form-name">
	                                                                        <label>Your name</label>
	                                                                        <input className="form-control" name="name" />
	                                                                    </p>
	                                                                    <p className="comment-form-comment">
	                                                                        <label>Comment</label>
	                                                                        <textarea className="form-control" name="comment" cols="45" rows="8" aria-required="true"></textarea>
	                                                                    </p>
	                                                                    <p>
	                                                                        <input name="submit" className="btn btn-primary form-submit" value="Post Comment" type="submit" />
	                                                                    </p>
	                                                                </form>
	                                                            </div> 
	                                                        </div>
	                                                    </div>
	                                                    <div className="clear"></div>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                    <div className="related products">
	                                        <div className="related-title">
	                                            <h3><span>Related Products</span></h3>
	                                        </div>
	                                        <ul className="products columns-3" data-columns="3">
	                                            <li className="product">
													<div className="product-container">
														<figure>
															<div className="product-wrap">
																<div className="product-images">
																	<span className="onsale">Sale!</span>
                                                                    <div className="shop-loop-thumbnail shop-loop-front-thumbnail">
                                                                        <img width="365" height="385" src="	images/product/product16_front.jpg" alt=""/>
                                                                    </div>
                                                                    <div className="shop-loop-thumbnail shop-loop-back-thumbnail">
                                                                        <img width="365" height="385" src="images/product/product16_back.jpg" alt=""/>
                                                                    </div>
                                                                    <div className="yith-wcwl-add-to-wishlist">
                                                                        <a href="#" className="add_to_wishlist">Add to Wishlist</a>
                                                                    </div>
                                                                    <div className="clear"></div>
																</div>
																<div className="shop-loop-actions">
																	<a href="#" className="button add_to_cart_button product_type_simple">Add to cart</a>
																	<a className="shop-loop-quickview" title="Quick shop" href="#"></a>
																</div>
															</div>
															<figcaption>
																<div className="shop-loop-product-info">
																	<div className="info-title">
																		<div className="product-category">
																			<a href="#" rel="tag">Shirts</a>, <a href="#" rel="tag">Tops &amp; Tunics</a>
																		</div>
																		<h3 className="product_title">
																			<a href="#">Miss Chase</a>
																		</h3>
																	</div>
																	<div className="info-meta">
																		<div className="info-price">
																			<span className="price"> 
																				<ins>
																					<span className="amount">&#36;18.00</span>
																				</ins>
																				<del>
																					<span className="amount">&#36;20.00</span>
																				</del>
																			</span>
																		</div>
																		<div className="info-rating">
																			<div className="star-rating">
																			<span width="90%"></span>
																			</div>
																		</div>
																	</div>
																</div>
															</figcaption>
														</figure>
													</div>
												</li>
												<li className="product">
													<div className="product-container">
														<figure>
															<div className="product-wrap">
																<div className="product-images">
																	<div className="shop-loop-thumbnail shop-loop-front-thumbnail">
                                                                        <img width="365" height="385" src="	images/product/product17_front.jpg" alt=""/>
                                                                    </div>
                                                                    <div className="shop-loop-thumbnail shop-loop-back-thumbnail">
                                                                        <img width="365" height="385" src="images/product/product17_back.jpg" alt=""/>
                                                                    </div>
                                                                    <div className="yith-wcwl-add-to-wishlist">
                                                                        <a href="#" className="add_to_wishlist">Add to Wishlist</a>
                                                                    </div>
                                                                    <div className="clear"></div>
																</div>
																<div className="shop-loop-actions">
																	<a href="#" className="button add_to_cart_button product_type_simple">Add to cart</a>
																	<a className="shop-loop-quickview" title="Quick shop" href="#"></a>
																</div>
															</div>
															<figcaption>
																<div className="shop-loop-product-info">
																	<div className="info-title">
																		<div className="product-category">
																			<a href="#" rel="tag">Shirts</a>, <a href="#" rel="tag">Tops &amp; Tunics</a>
																		</div>
																		<h3 className="product_title">
																			<a href="#">Mustard Brown Printed</a>
																		</h3>
																	</div>
																	<div className="info-meta">
																		<div className="info-price">
																			<span className="price"> 
																				<span className="amount">&#36;20.00</span>
																			</span>
																		</div>
																		<div className="info-rating">
																			<div className="star-rating">
																			<span width="90%"></span>
																			</div>
																		</div>
																	</div>
																</div>
															</figcaption>
														</figure>
													</div>
												</li>
												<li className="product">
													<div className="product-container">
														<figure>
															<div className="product-wrap">
																<div className="product-images">
																	<div className="shop-loop-thumbnail shop-loop-front-thumbnail">
                                                                        <img width="365" height="385" src="	images/product/product18_front.jpg" alt=""/>
                                                                    </div>
                                                                    <div className="shop-loop-thumbnail shop-loop-back-thumbnail">
                                                                        <img width="365" height="385" src="images/product/product18_back.jpg" alt=""/>
                                                                    </div>
                                                                    <div className="yith-wcwl-add-to-wishlist">
                                                                        <a href="#" className="add_to_wishlist">Add to Wishlist</a>
                                                                    </div>
                                                                    <div className="clear"></div>
																</div>
																<div className="shop-loop-actions">
																	<a href="#" className="button add_to_cart_button product_type_simple">Add to cart</a>
																	<a className="shop-loop-quickview" title="Quick shop" href="#"></a>
																</div>
															</div>
															<figcaption>
																<div className="shop-loop-product-info">
																	<div className="info-title">
																		<div className="product-category">
																			<a href="#" rel="tag">Shirts</a>, <a href="#" rel="tag">Tops &amp; Tunics</a>
																		</div>
																		<h3 className="product_title">
																			<a href="#">Mustard Purple</a>
																		</h3>
																	</div>
																	<div className="info-meta">
																		<div className="info-price">
																			<span className="price"> 
																				<span className="amount">&#36;20.00</span>
																			</span>
																		</div>
																		<div className="info-rating">
																			<div className="star-rating">
																			<span width="90%"></span>
																			</div>
																		</div>
																	</div>
																</div>
															</figcaption>
														</figure>
													</div>
												</li>
	                                        </ul>
	                                    </div>
									</div>
								</div>
							</div>
						</div>
						<aside className="col-md-3 sidebar-wrap">
							<div className="main-sidebar">
								<div className="widget shop widget_product_categories">
									<h4 className="widget-title"><span>Categories</span></h4>
									<ul className="product-categories">
										<li><a href="#">Capris &amp; Tights</a> <span className="count">(6)</span></li>
										<li><a href="#">Dresses</a> <span className="count">(4)</span></li>
										<li><a href="#">Innerwear</a> <span className="count">(5)</span></li>
										<li><a href="#">Shirts</a> <span className="count">(6)</span></li>
										<li><a href="#">Tees &amp; Polos</a> <span className="count">(6)</span></li>
										<li><a href="#">Tops &amp; Tunics</a> <span className="count">(12)</span></li>
										<li><a href="#">Winter Wear</a> <span className="count">(2)</span></li>
									</ul>
								</div>
								<div className="widget shop widget_top_rated_products">
									<h4 className="widget-title"><span>Top Rated</span></h4>
									<ul className="product_list_widget">
										<li>
											<a href="#">
												<img width="200" height="200" src="images/product/product1_front.jpg" alt=""/>
												<span className="product-title">Black Solids Poly</span>
											</a>
											<div className="star-rating">
											<span width="90%"></span>
											</div>
											<span className="amount">&#36;9.00</span>
										</li>
										<li>
											<a href="#">
												<img width="200" height="200" src="images/product/product2_front.jpg" alt=""/>
												<span className="product-title">Avirate Blue Ditsy</span>
											</a>
											<div className="star-rating">
											<span width="90%"></span>
											</div>
											<span className="amount">&#36;18.00</span>
										</li>
										<li>
											<a href="#">
												<img width="200" height="200" src="images/product/product3_front.jpg" alt=""/>
												<span className="product-title">Mustard Brown</span>
											</a>
											<div className="star-rating">
											<span width="90%"></span>
											</div>
											<span className="amount">&#36;20.00</span>
										</li>
										<li>
											<a href="#">
												<img width="200" height="200" src="images/product/product4_front.jpg" alt=""/>
												<span className="product-title">Unique Fashion Pink</span>
											</a>
											<div className="star-rating">
											<span width="90%"></span>
											</div>
											<span className="amount">&#36;35.00</span>
										</li>
										<li>
											<a href="#">
												<img width="200" height="200" src="images/product/product5_front.jpg" alt=""/>
												<span className="product-title">Chemistry Pink</span>
											</a>
											<div className="star-rating">
											<span width="90%"></span>
											</div>
											<ins>
												<span className="amount">&#36;2.00</span>
											</ins>
											<del>
												<span className="amount">&#36;3.00</span>
											</del>
										</li>
									</ul>
								</div>
								<div className="widget shop widget_recent_reviews">
									<h4 className="widget-title"><span>Recent Reviews</span></h4>
									<ul className="product_list_widget">
										<li>
											<a href="#">
												<img width="200" height="200" src="images/product/product6_front.jpg" alt=""/>
												<span className="product-title">Black Solids Poly</span>
											</a>
											<div className="star-rating">
											<span width="90%"></span>
											</div>
											<span className="amount">&#36;9.00</span>
										</li>
										<li>
											<a href="#">
												<img width="200" height="200" src="images/product/product7_front.jpg" alt=""/>
												<span className="product-title">Avirate Blue Ditsy</span>
											</a>
											<div className="star-rating">
											<span width="90%"></span>
											</div>
											<span className="amount">&#36;18.00</span>
										</li>
										<li>
											<a href="#">
												<img width="200" height="200" src="images/product/product8_front.jpg" alt=""/>
												<span className="product-title">Mustard Brown</span>
											</a>
											<div className="star-rating">
											<span width="90%"></span>
											</div>
											<span className="amount">&#36;20.00</span>
										</li>
										<li>
											<a href="#">
												<img width="200" height="200" src="images/product/product9_front.jpg" alt=""/>
												<span className="product-title">Unique Fashion Pink</span>
											</a>
											<div className="star-rating">
											<span width="90%"></span>
											</div>
											<span className="amount">&#36;35.00</span>
										</li>
										<li>
											<a href="#">
												<img width="200" height="200" src="images/product/product10_front.jpg" alt=""/>
												<span className="product-title">Chemistry Pink</span>
											</a>
											<div className="star-rating">
											<span width="90%"></span>
											</div>
											<ins>
												<span className="amount">&#36;2.00</span>
											</ins>
											<del>
												<span className="amount">&#36;3.00</span>
											</del>
										</li>
									</ul>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>	     </>
		)
	};
}

export default DetailProduct;