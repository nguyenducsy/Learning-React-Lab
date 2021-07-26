import React from 'react';
import {  Col, Row } from "react-bootstrap";

class FormLH extends React.Component {
    constructor(){
        super();
        this.hoten = React.createRef();
        this.tinh = React.createRef();
        this.email = React.createRef();
        this.noidung = React.createRef();

    }
    submitDuLieu =  (e) => {
        console.log(this.hoten.current.value);
        console.log(this.email.current.value);
        e.preventDefault();
    }

    render (){
        const kq = 
        <form className=" col-10 m-auto " onSubmit={this.submitDuLieu} >
       
        <div className="mb-3">
            <label>Họ tên </label>
            <input id="hoten" className="form-control " 
            placeholder="Họ tên" ref={this.hoten} />
        </div>
        <div className="mb-3">
            <label>Email </label>
            <input id="email" className="form-control " 
            placeholder="Email" ref={this.email} />
        </div>
        <div className="mb-3">
            <label>Phong ban </label>
            <select id="tinh" className="form-control "
            placeholder="Chọn tỉnh" ref={this.tinh}> 
                <option value="0">Chọn phòng ban</option>
                <option value="1">Phòng kỹ thuật</option>
                <option value="2">Phòng kinh doanh</option>
            </select>
        </div>
        <div className="mb-3">
            <label >Nội dung </label>
            <textarea id="noidung" className="form-control" 
            placeholder="Nội dung liên hệ" ref={this.noidung}/>
        </div>
        <div className="mb-3 mr-3 " >                
            <button type="submit" className="btn btn-primary">Gưi liên hệ</button>
        </div>

    </form>
    return(kq);
    }

}

export default FormLH;