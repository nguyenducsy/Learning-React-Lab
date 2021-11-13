import React from 'react';
import { BrowserRouter, Route, Link  } from 'react-router-dom';


class TinhNang extends React.Component  {
    constructor(props){
        super()
   
    }
    xem(){
        const Item_local = JSON.parse(localStorage.getItem('info'));
        if (!Item_local) {
            window.location.reload();
        }else {
            prompt("Đây là chức năng cho người quản trị . Nếu muốn xem cần gửi lý do.")
            window.location.reload();
        }    
      
    }
    render() {
        return ( 
            <>
        	<div className="heading-container ">
                <div className="container heading-standar">
                <div className="heading-wrap">
                    <div className="page-breadcrumb clearfix">
                        <div className="pull-left">
                            <ul className="breadcrumb">
                                <li>
                                    <a href="#" className="home"><span>Trang chủ</span></a>
                                </li>
                                <li><span>Tính Năng</span></li>
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
                        <h1>TÍNH NĂNG</h1>
                    </div>
                </div>
            </div>
            </div>
			<div class="content-container">
				<div class="container">
					<div class="row">
                        <div className="button"><button className="btn btn-primary" onClick={() => this.xem()}>Xác thực</button></div>
						<div class="col-md-12 main-wrap">
							<div class="main-content">
                                
                                <div class="empty-space-40"></div>
                                <div class="row">
                                    <div class="column col-md-6 col-sm-6">
                                        <div class="separator separator-align-right separator-width-100">
                                            <span class="separator-left">
                                                <span class="separator-line"></span>
                                            </span>
                                            <h4>Quản trị</h4>
                                            <span class="separator-right">
                                                <span class="separator-line"></span>
                                            </span>
                                        </div>
                                        <div class="empty-space-40"></div>
                                        <div class="timeline  timeline-dotted timeline-danger timeline-image one-columns timeline-right">
                                            <div class="timeline-wrap">                                                                  
                                                <div class="timeline-item">
                                                    <div class="timeline-line el-appear"></div>
                                                    <div class="timeline-item-wrap">
                                                        <div class="timeline-badge el-appear">
                                                            <a><img alt="" src="https://icons.veryicon.com/png/o/system/dan_system/manager-1.png"/></a>
                                                        </div>
                                                        <div class="animate-box animated" data-animate="1">
                                                            <div class="timeline-arrow"></div>
                                                            <div class="timeline-content">
                                                                <p>
                                                                  Thực hiện quản lý thêm xóa sửa cho sản phẩm và danh mục khi đã đăng nhập và xác thực.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column col-md-6 col-sm-6">
                                        <div class="separator separator-align-left separator-width-100">
                                            <span class="separator-left">
                                                <span class="separator-line"></span>
                                            </span>
                                            <h4>Người dùng</h4>
                                            <span class="separator-right">
                                                <span class="separator-line"></span>
                                            </span>
                                        </div>
                                        <div class="empty-space-40"></div>
                                        <div class="timeline timeline-dotted timeline-info timeline-icon one-columns timeline-left">
                                            <div class="timeline-wrap">
                                            <div class="timeline-item">
                                                    <div class="timeline-line el-appear"></div>
                                                    <div class="timeline-item-wrap">
                                                        <div class="timeline-badge el-appear">
                                                            <a><i class="fa fa-comments-o"></i></a>
                                                        </div>
                                                        <div class="animate-box animated" data-animate="1">
                                                            <div class="timeline-arrow"></div>
                                                            <div class="timeline-content">
                                                                <strong>Chi tiết sản phẩm</strong>
                                                                <p>
                                                                    Người dùng có thể xem chi tiết sản phẩm của mình như các đánh giá , bình luận của khách hàng , xem sản phẩm rõ hơn trước khi thêm vào giỏ .
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-line el-appear"></div>
                                                    <div class="timeline-item-wrap">
                                                        <div class="timeline-badge el-appear">
                                                            <a><i class="fa fa-comments-o"></i></a>
                                                        </div>
                                                        <div class="animate-box animated" data-animate="1">
                                                            <div class="timeline-arrow"></div>
                                                            <div class="timeline-content">
                                                                <strong>Chức năng xem sản phẩm theo loại </strong>
                                                                <p>
                                                                    Người dùng có thể lọc sản phẩm theo loại danh mục.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-line el-appear"></div>
                                                    <div class="timeline-item-wrap">
                                                        <div class="timeline-badge el-appear">
                                                            <a><i class="fa fa-comments-o"></i></a>
                                                        </div>
                                                        <div class="animate-box animated" data-animate="1">
                                                            <div class="timeline-arrow"></div>
                                                            <div class="timeline-content">
                                                                <strong>Chọn là sản phẩm yêu thích</strong>
                                                                <p>
                                                                    Người dùng có thể click vào biểu tượng trái tim góc phải trên sản phẩm khi di chuột vào . Khối sản phẩm được yêu thích sẽ đổi màu viền sáng lên cho người dùng dễ nhận biết khi xem lại .
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-line el-appear"></div>
                                                    <div class="timeline-item-wrap">
                                                        <div class="timeline-badge el-appear">
                                                            <a><i class="fa fa-comments-o"></i></a>
                                                        </div>
                                                        <div class="animate-box animated" data-animate="1">
                                                            <div class="timeline-arrow"></div>
                                                            <div class="timeline-content">
                                                                <strong>Sản phẩm nổi bật và sản phẩm Hot</strong>
                                                                <p>
                                                                   Là một danh sách sản phẩm Hot và một danh sách sản phẩm nổi bật được hiển thị ở trang chủ và trang chi tiết.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-line el-appear"></div>
                                                    <div class="timeline-item-wrap">
                                                        <div class="timeline-badge el-appear">
                                                            <a><i class="fa fa-comments-o"></i></a>
                                                        </div>
                                                        <div class="animate-box animated" data-animate="1">
                                                            <div class="timeline-arrow"></div>
                                                            <div class="timeline-content">
                                                                <strong>Thêm sản phẩm vào giỏ</strong>
                                                                <p>
                                                                    Người dùng có thể thêm sản phẩm vào giỏ hàng của mình bằng cách nhấp vào biểu tượng giỏ hàng khi rê chuột vào sản phẩm
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-line el-appear"></div>
                                                    <div class="timeline-item-wrap">
                                                        <div class="timeline-badge el-appear">
                                                            <a><i class="fa fa-comments-o"></i></a>
                                                        </div>
                                                        <div class="animate-box animated" data-animate="1">
                                                            <div class="timeline-arrow"></div>
                                                            <div class="timeline-content">
                                                                <strong>Kiểm tra và xóa sản phẩm trong giỏ hàng</strong>
                                                                <p>
                                                                    Người dùng có thể xóa sản phẩm vào giỏ hàng của mình bằng cách nhấp vào biểu tượng chéo trên dòng của sản phẩm trong giỏ 
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-line el-appear"></div>
                                                    <div class="timeline-item-wrap">
                                                        <div class="timeline-badge el-appear">
                                                            <a><i class="fa fa-comments-o"></i></a>
                                                        </div>
                                                        <div class="animate-box animated" data-animate="1">
                                                            <div class="timeline-arrow"></div>
                                                            <div class="timeline-content">
                                                                <strong>Tổng tiền</strong>
                                                                <p>
                                                                    Là chức năng cộng tất cả giá sản phẩm và phí đi kèm và được hiển thị ở giỏ hàng
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-line el-appear"></div>
                                                    <div class="timeline-item-wrap">
                                                        <div class="timeline-badge el-appear">
                                                            <a><i class="fa fa-comments-o"></i></a>
                                                        </div>
                                                        <div class="animate-box animated" data-animate="1">
                                                            <div class="timeline-arrow"></div>
                                                            <div class="timeline-content">
                                                                <strong>Đánh giá sản phẩm</strong>
                                                                <p>
                                                                    Người dùng có thể gửi đánh giá của mình về sản phẩm đã mua 
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-line el-appear"></div>
                                                    <div class="timeline-item-wrap">
                                                        <div class="timeline-badge el-appear">
                                                            <a><i class="fa fa-comments-o"></i></a>
                                                        </div>
                                                        <div class="animate-box animated" data-animate="1">
                                                            <div class="timeline-arrow"></div>
                                                            <div class="timeline-content">
                                                                <strong>Đổi mệnh giá tiền</strong>
                                                                <p>
                                                                    Người dùng có thể đổi mệnh giá tiền tùy ý ở góc phải màn hình.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-line el-appear"></div>
                                                    <div class="timeline-item-wrap">
                                                        <div class="timeline-badge el-appear">
                                                            <a><i class="fa fa-comments-o"></i></a>
                                                        </div>
                                                        <div class="animate-box animated" data-animate="1">
                                                            <div class="timeline-arrow"></div>
                                                            <div class="timeline-content">
                                                                <strong>Lấy thông tin thời tiết từ API </strong>
                                                                <p>
                                                                    Thông tin thời tiết lấy về được hiển thị ở góc màn hình để dễ dàng nhìn thấy.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="timeline-item">
                                                    <div class="timeline-line el-appear"></div>
                                                    <div class="timeline-item-wrap">
                                                        <div class="timeline-badge el-appear">
                                                            <a><i class="fa fa-comments-o"></i></a>
                                                        </div>
                                                        <div class="animate-box animated" data-animate="1">
                                                            <div class="timeline-arrow"></div>
                                                            <div class="timeline-content">
                                                                <strong>Chức năng đăng nhập bằng tài khoản Google </strong>
                                                                <p>
                                                                    Người dùng có thể đăng nhập bằng tài khoản Google để tiết kiệm thời gian và dễ dàng xác thực.
                                                                </p>
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
					</div>
				</div>
			</div>		
        </>
    )
}


}


export default TinhNang;