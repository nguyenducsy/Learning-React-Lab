import React from 'react';
import { connect } from 'react-redux'; 
import ShowCarts from './ShowCart'
import no from './no'
import FormComment from './Comment';
import ListComment from './ListComment'
import ListProHot from './ListProductHOT'
import ListProChay  from './ListProductBANCHAY'
import Category from './Catalog';

class DetailProduct extends React.Component  {
	constructor(props){
		super();
        this.state = {
            showYK: true,quatityChecked:0, idProChecked:[] , param: "" , id: '' ,item:[]
		}    
		this.state.param =  new URLSearchParams(window.location.search);
		this.state.id = this.state.param.get("id");
		
		this.name = React.createRef();
		this.content = React.createRef();  
		
	}

		//format 
		formatter = new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND',
			minimumFractionDigits: 0
		  })

		  choosePro=(idPro) => { 
			alert("Đã thêm vào giỏ")
			this.state.idProChecked.push(idPro);
			this.state.quatityChecked++;     
			ShowCarts(idPro,this.props.listPro)
			window.location.reload()
			no()
		}

    render() {
		
		let ID = parseInt(this.state.id)
		return (
            this.props.listPro.map((p,idx)  => {
				if (p.id === ID) {
					
					return  <>
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
	                                                                <a href={p.urlPic}  data-rel="magnific-popup" title="p11">
	                                                                    <img width="700" height="700" src={p.urlPic} alt="" />
	                                                                </a>
	                                                            </li>
	                                                            <li className="caroufredsel-item">
	                                                                <a href={p.urlPic2}  data-rel="magnific-popup" title="p12">
	                                                                    <img width="700" height="700" src={p.urlPic2} alt="p12"/>
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
	                                                                        <img width="200" height="200" src={p.urlPic} alt="p11" title="p11"/>
	                                                                    </a>
	                                                                </div>
	                                                            </li>
	                                                            <li className="caroufredsel-item">
	                                                                <div className="thumb">
	                                                                    <a href="#" data-rel="1" title="p12">
	                                                                        <img width="200" height="200" src={p.urlPic2} alt="p12"/>
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
	                                                <h1 className="product_title entry-title">{p.name}</h1>
	                                                <div className="shop-product-rating">
	                                                    <div className="star-rating">
														<span className={"star-rating-width" + p.star*20}></span>
	                                                    </div>
	                                                    <a href="#reviews" className="shop-review-link">
	                                                        (<span className="count">{p.view}</span> đánh giá)
	                                                    </a>
	                                                </div>
	                                                <p>
														{p.des}
	                                                </p>
	                                            <p className="price">Giá: <span className="amount"> {this.formatter.format(p.price)}</span></p>
	                                                {/* <form className="cart">
	                                                    */}
														<div className="cart">
														<div className="quantity">
	                                                        <input type="number" step="1" min="1" name="quantity" value="1" className="input-text qty text" size="4"/>
	                                                    </div> 
	                                                    <button type="submit" className="button" onClick={() => this.choosePro(p.id)}>Thêm vào giỏ</button>
														</div>
											        {/* </form> */}
	                                                <div className="add-to-wishlist-actions">
	                                                    <a href="#" className="add_to_wishlist"></a>
	                                                </div>
	                                                <div className="clear"></div>
	                                                <div className="product_meta">
	                                                    <span className="posted_in">
	                                                        Danh mục: <a href="#">Áo thun</a>, <a href="#">Tops 
															{/* &amp;  */}
															</a>.
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
	                                                <a data-toggle="tab" role="tab" href="#tab-reviews">Đánh giá (2)</a>
	                                            </li>
	                                        </ul>
	                                        <div className="tab-content">
	                                            <div className="tab-pane active" id="tab-description">
	                                                <p>
														{p.des}
                                                    </p>
	                                            </div>
	                                            <div className="tab-pane" id="tab-reviews">
	                                                <div id="reviews">
	                                                    <div id="comments">
	                                                        <h2>2 reviews for Brown Printed</h2>
	                                                        <ol className="commentlist" id ="listComment">
															<ListComment/>
	                                                    
	                                                        </ol>
	                                                        <div id="respond-wrap">
	                                                            <div id="respond" className="comment-respond"> {/* Form Comment */} 
	                                                         <FormComment/>
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
                                    <h4 className="widget-title"><span>Danh mục</span></h4>
                                    <ul className="product-categories" id ="catalogs">
                                        <Category />
                                    {/* <Route path='/' exact component={ListPro} /> */}
                                    {/* <Route path='/' component={ListProHot}/> */}
                            
                   
                                    </ul>
                                </div>
                                <div className="widget shop widget_top_rated_products">
                                    <h4 className="widget-title"><span>Nổi bật</span></h4>
                                    <ul className="product_list_widget" id="listProHot">
                                    <ListProHot/>
                                    </ul>
                                </div>
                                <div className="widget shop widget_recent_reviews">
                                    <h4 className="widget-title"><span>Bán chạy</span></h4>
                                    <ul className="product_list_widget" id="listProChay">
                                   <ListProChay/>
                                    </ul>
                                </div>
                            </div>
                        </aside>
					</div>
				</div>
			</div>	   
		</>
	
				}
            })
        );	
	}
}


const mapState = (state) => {  
    return {  listPro : state.product, }; 
  };
export default connect(mapState, null)(DetailProduct);