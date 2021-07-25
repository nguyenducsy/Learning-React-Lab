import React from 'react';

function Head1_home(props) {
    return (
        <>
        <div className="heading-container heading-resize">
            <div className="background-blur">
                <div className="heading-background heading-parallax bg-3">
                    <div className="container">
                        <div className="row heading-wrap">
                            <div className="col-md-12 page-title parallax-content">
                                <h1>Great daily deals</h1>
                                <span className="subtitle"><button className="btn btn-light">Shop Now!</button></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="content-container shop">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 main-wrap">
                        <div className="main-content">
                            <div className="columns-3">
                                <div className="shop-toolbar">
                                    <p className="shop-result-count">Showing 1&ndash;12 of 23 results</p>
                                    <form className="shop-ordering" method="get">
                                        <div className="shop-ordering-select">
                                            <select name="orderby" className="orderby">
                                            <option value="" selected='selected'>Default Sorting</option>
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
                                            <option value="" selected='selected'>Show 12 products</option>
                                            <option value="">Show 24 products</option>
                                            <option value="">Show 36 products</option>
                                        </select>
                                            <i></i>
                                        </div>
                                    </form>
                                </div>
                                {/*LIST PRODUCT*/}
                                <ul className="products" id="listpro">
                            	</ul>

							<div className="paginate">
                                        <div className="paginate_links">
                                            <span className="pagination-meta">Page 1 of 3</span>
                                            <span className="page-numbers current">1</span>
                                            <a className="page-numbers" href="#">2</a>
                                            <a className="page-numbers" href="#">3</a>
                                            <a className="next page-numbers" href="#">
                                                <i className="fa fa-angle-right"></i>
                                            </a>
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
            </div>
            </>
    );
}

export default Head1_home;