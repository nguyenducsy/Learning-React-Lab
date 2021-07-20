import React from 'react';
import '../HienGioHang.css';
export default class HienGioHang extends React.Component{
    constructor(props){
        super(props);
        this.state = {caption:"Sản phẩm đã chọn"};
    }

    render(){
                //format 
                const formatter = new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                    minimumFractionDigits: 0
                  })
        let kq = [];
        this.props.sachDaChon.forEach(sach => {
            kq.push(
                <>
                   <hr/>
                <div key={sach.id} className="motsach">
                    <img src={sach.urlHinh} align="left"/>
                    <p>{sach.tensach}</p>
                    <p>Giá: {formatter.format(sach.price)}</p>
                    <p><span >X</span></p>
                </div>
                </>
            );
        });
        const gh = 
            <div className="hiengiohang">
                <h2>{this.state.caption}</h2>
                {kq}
            </div>;
        return (gh);
    }
}