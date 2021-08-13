import React from 'react';
import { BrowserRouter, Route, Link  } from 'react-router-dom';
import ListPro from './ListProduct'
import ListProHot from './ListProductHOT'
import ListProChay  from './ListProductBANCHAY'
import Category from './Catalog';


const ContentHome = (props) => {

    
    return(
        <>
        <div className="heading-container heading-resize">
            <div className="background-blur">
                <div className="heading-background heading-parallax bg-3">
                    <div className="container">
                        <div className="row heading-wrap">
                            <div className="col-md-12 page-title parallax-content">
                                <h1>Ưu đãi hàng ngày từ OIZOI</h1>
                                <span className="subtitle"><button className="btn btn-light">Xin chào !</button></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="content-container shop">
            <div className="container">
                <div className="row">
                  
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


                        <div className="col-md-9 main-wrap">
                        <div className="main-content">
                            <div className="columns-3">
                                <div className="shop-toolbar">
                                    <p className="shop-result-count">Hiển thị 1&ndash;12 trong 23 kết quả</p>
                                    <form className="shop-ordering" method="get">
                                        <div className="shop-ordering-select">
                                            <select name="orderby" className="orderby">
                                            <option value="" selected='selected'>Sắp xếp mặt định</option>
                                            <option value="">Sort by Popularity</option>
                                            <option value="">Sort by Average Rating</option>
                                            <option value="">Sort by Newness</option>
                                            <option value="">Sort by Price: low to high</option>
                                            <option value="">Sort by Price: high to low</option>
                                        </select>
                                            <i></i>
                                        </div>
                                        <div className="shop-ordering-select">
                                            <select name="per_page" className="per_page">
                                            <option value="" selected='selected'>Hiển thị 9 sản phẩm</option>
                                            <option value="">Show 24 products</option>
                                            <option value="">Show 36 products</option>
                                        </select>
                                            <i></i>
                                        </div>
                                    </form>
                                </div>
                                {/*LIST PRODUCT*/}
                                <ul className="products" id="listpro">                 
                                    <ListPro/>                          
                        	    </ul>

							<div className="paginate">
                                        <div className="paginate_links">
                                            <span className="pagination-meta">Trang 1 của 3</span>
                                            <span className="page-numbers current">1</span>
                                            {/* <a className="page-numbers" href="#">2</a>
                                            <a className="page-numbers" href="#">3</a>
                                            <a className="next page-numbers" href="#">
                                                <i className="fa fa-angle-right"></i>
                                            </a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>

    )
}

export default ContentHome;


