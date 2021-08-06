import { BrowserRouter, Route, Link  } from 'react-router-dom';
import no from './no'

const Header = () => {
    let n =  no()
    return (
        <>
            <header className="header-container header-type-default header-navbar-default">
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-6">
                                <div className="left-topbar">
                                    <div className="topbar-info">
                                        <a href="#"><i className="fa fa-phone"></i> (+84) 702 434 097</a>
                                        <a href="https://github.com/nguyenducsy">
                                            <i className="fa fa-github"></i>
                                            <span>github.com(nguyenducsy)</span>
                                        </a>                   
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-6">
                                <div className="right-topbar">
                                
                                    <div className="topbar-nav">
                                        <ul className="nav top-nav">
                                            <img src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-1/p240x240/152237101_1176143049455436_5560242853441798398_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=7206a8&_nc_ohc=BysPHR_fQOYAX9wF91T&_nc_ht=scontent-xsp1-3.xx&oh=211896b696e1deb9584cac428b601317&oe=61245992"
                                                alt=""/>
                                            <li>
                                                <Link to="account">
                                                <a title="Tài khoản của tôi">Hello , Đức Sỹ</a>
                                                </Link>
                                                </li>
                                            <li className="dropdown">
                                                <button type="submit">
                                                    <Link to="login">
                                                        <a title="Đăng nhập"> <img src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png" /></a>
                                                    </Link>
                                                </button>       
                                                <button type="submit" className="logout">
                                                    <Link to="logout">
                                                    <img title="Đăng xuất" src="https://img.icons8.com/ios-filled/50/000000/logout-rounded-left.png" />
                                                    </Link>
                                                </button>                                
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-container">
                <div className="navbar navbar-default navbar-scroll-fixed">
                    <div className="navbar-default-wrap">
                        <div className="container">
                            <div className="navbar-wrap">
                                <div className="navbar-header">
                                    <button data-target=".primary-navbar-collapse" data-toggle="collapse" type="button" className="navbar-toggle">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar bar-top"></span> 
                                        <span className="icon-bar bar-middle"></span> 
                                        <span className="icon-bar bar-bottom"></span>
                                    </button>
                                    <a className="cart-icon-mobile" href="#">
                                        <i className="elegant_icon_bag"></i><span>0</span>
                                    </a>
                                    <Link to="/">
                                    <a className="navbar-brand" title="AirSlice">
                                        <img className="logo" alt="AirSlice" src="images/logo-oizoi.png" />
                                        <img className="logo-fixed" alt="AirSlice" src="images/logo-oizoi.png" />
                                        <img className="logo-mobile" alt="AirSlice" src="images/logo-oizoi.png" />
                                    </a>
                                    </Link>
                                </div>
                                <nav className="collapse navbar-collapse primary-navbar-collapse">
                                    <ul className="nav navbar-nav primary-nav">
                                        <li className="menu-item-has-children megamenu dropdown active">
                                            <Link to="/">
                                            <a title="Trang chủ" className="dropdown-hover">
                                                <i className="navicon elegant_icon_house_alt"></i>
                                                <span className="underline">TRANG CHỦ</span> 
                                                {/* <span className="caret"></span> */}
                                            </a>     
                                            </Link>
                                            </li>   
                                            <li class="menu-item-has-children megamenu megamenu-fullwidth dropdown">
                                            <Link to="tinhnang">
                                                <a title="Features" href="tinhnang" class="dropdown-hover">
													<i class="navicon elegant_icon_lightbulb_alt "></i>
													<span class="underline">Tính năng</span>
                                                     {/* <span class="caret"></span> */}
												</a>	
                                            </Link>						
											</li>               
                                        <li className="menu-item-has-children megamenu megamenu-fullwidth dropdown">
                                          <Link to="cart">
                                            <a title="Shop"  className="dropdown-hover">
                                                <span id="numberCart" className="circle">{n}</span>
                                                <i className="navicon elegant_icon_cart_alt"></i>
                                                <span className="underline">GIỎ HÀNG</span>
                                                 {/* <span className="caret"></span> */}
                                            </a>     
                                            </Link>
                                        </li>
                                        <li className="navbar-search">
                                            <a className="navbar-search-button" href="#">
                                                <i className="fa fa-search"></i>
                                            </a>
                                            <div className="search-form-wrap show-popup hide">
                                                <form className="searchform">
                                                    <input type="search" className="searchinput" placeholder="Search..." />
                                                    <input type="submit" className="searchsubmit hidden" name="submit" value="Search" />
                                                </form>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </header>
         
        </>
    )
}

export default Header;