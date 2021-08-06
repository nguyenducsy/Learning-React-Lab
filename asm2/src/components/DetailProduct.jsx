import React from 'react';

class DetailProduct extends React.Component  {
	constructor(props){
        super();
        this.state = {
            showYK: true,quatityChecked:0, idProChecked:[]
		}    
		console.log(props);
		this.name = React.createRef();
		this.content = React.createRef();
		
	}
	choosePro = (idPro) => {  
        this.state.idProChecked.push(idPro);
		this.state.quatityChecked++;
		console.log(idPro);
		// localStorage.setItem('no' , JSON.stringify(this.state.quatityChecked));
        this.props.ShowCarts(idPro);
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
										<a href="#" className="home"><span>Trang chủ</span></a>
									</li>
									<li><span>Chi tiết</span></li>
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
							<h1>Chi tiết sản phẩm</h1>
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
	                                                                <a href={this.props.pro.urlPic}  data-rel="magnific-popup" title="p11">
	                                                                    <img width="700" height="700" src={this.props.pro.urlPic} alt="" />
	                                                                </a>
	                                                            </li>
	                                                            <li className="caroufredsel-item">
	                                                                <a href={this.props.pro.urlPic2}  data-rel="magnific-popup" title="p12">
	                                                                    <img width="700" height="700" src={this.props.pro.urlPic2} alt="p12"/>
	                                                                </a>
	                                                            </li>
	                                                        </ul>
	                                                        <a href="#" className="caroufredsel-prev"><img src="https://img.icons8.com/flat-round/64/000000/circled-chevron-right.png" alt=""/></a>
	                                                        <a href="#" className="caroufredsel-next"><img src="https://img.icons8.com/flat-round/64/000000/circled-chevron-right.png" alt=""/></a>
	                                                    </div>
	                                                </div>
	                                                <div className="product-thumbnails-slider single-product-thumbnails" data-visible-max="4" data-visible-min="3" data-responsive="1" data-infinite="1">
	                                                    <div className="caroufredsel-wrap">
	                                                        <ul className="caroufredsel-items">
	                                                            <li className="caroufredsel-item">
	                                                                <div className="thumb">
	                                                                    <a href="#" data-rel="0" title="p11">
	                                                                        <img width="200" height="200" src={this.props.pro.urlPic} alt="p11" title="p11"/>
	                                                                    </a>
	                                                                </div>
	                                                            </li>
	                                                            <li className="caroufredsel-item">
	                                                                <div className="thumb">
	                                                                    <a href="#" data-rel="1" title="p12">
	                                                                        <img width="200" height="200" src={this.props.pro.urlPic2} alt="p12"/>
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
	                                                <h1 className="product_title entry-title">{this.props.pro.name}</h1>
	                                                <div className="shop-product-rating">
	                                                    <div className="star-rating">
														<span className={"star-rating-width" + this.props.pro.star*20}></span>
	                                                    </div>
	                                                    <a href="#reviews" className="shop-review-link">
	                                                        (<span className="count">{this.props.pro.view}</span> customer reviews)
	                                                    </a>
	                                                </div>
	                                                <p>
														{this.props.pro.des}
	                                                </p>
	                                            <p className="price">Giá: <span className="amount"> {this.props.format.format(this.props.pro.price)}</span></p>
	                                                {/* <form className="cart">
	                                                    */}
														<div className="cart">
														<div className="quantity">
	                                                        <input type="number" step="1" min="1" name="quantity" value="1" className="input-text qty text" size="4"/>
	                                                    </div> 
	                                                    <button type="submit" className="button" onClick={() => this.choosePro(this.props.pro.id)}>Add to cart</button>
														</div>
											        {/* </form> */}
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
																<i class="fa fa-facebook"></i>
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
	                                                <a data-toggle="tab" role="tab" href="#tab-description">Mô tả</a>
	                                            </li>
	                                            <li>
	                                                <a data-toggle="tab" role="tab" href="#tab-reviews">Bình luận (2)</a>
	                                            </li>
	                                        </ul>
	                                        <div className="tab-content">
	                                            <div className="tab-pane active" id="tab-description">
	                                                <p>
														{this.props.pro.des}
                                                    </p>
	                                            </div>
	                                            <div className="tab-pane" id="tab-reviews">
	                                                <div id="reviews">
	                                                    <div id="comments">
	                                                        <h2>2 reviews for Brown Printed</h2>
	                                                        <ol className="commentlist" id ="listComment">
	                                                     
	                                                    
	                                                        </ol>
	                                                        <div id="respond-wrap">
	                                                            <div id="respond" className="comment-respond"> {/* Form Comment */} 
	                                                         
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
	                                            {/* <h3><span>Related Products</span></h3> */}
	                                        </div>
											{/* san pham lien quan */}
	                                        <ul className="products columns-3" data-columns="3"  id="listpro">
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
								<h4 className="widget-title"><span>Nổi bật</span></h4>
                                    <ul className="product_list_widget" id="listProHot">
									</ul>
								</div>
								<div className="widget shop widget_recent_reviews">
								<h4 className="widget-title"><span>Bán chạy</span></h4>
                                    <ul className="product_list_widget" id="listProChay">
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