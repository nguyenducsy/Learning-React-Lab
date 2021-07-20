import React from 'react';
import '../ShowMotSach.css'
class MotSach extends React.Component{
    constructor(props){
        super();
        let like = ""
        this.state={thich:false , caption:"Thích"}
        console.log("Mot Sach Contructor");
        
    }
    thichSach = () => {
        this.setState({thich: !this.state.thich}); // thay đổi giá trị state thì sẽ chạy hàm should:36 bên dưới 
        // console.log(this.state.thich);
        
        if (this.state.thich==true) {
            this.setState({caption:"Thích"})
        }
        else   this.setState({caption:"Bỏ Thích"})
     
    }
    componentDidMount(){  // chạy 1 lần sau khi done render
        console.log("MotSach Didmount"); 
    }
    
    render(){
        console.log("MotSach Render");
        //format 
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0
          })

        
        const kq = 
        <div className= {this.state.thich? 'MotSach thich' : 'MotSach'}>
        <h3>{this.props.sach.tenSach}</h3>
        <img src={this.props.sach.urlHinh}/>
            <p className="gia">{formatter.format(this.props.sach.price)}</p>
            <p className="button">
            <button className="btnThich" type="button" onClick={this.thichSach}>{this.state.caption}</button>
                <button className="btnChonMua" type="button" onClick={() => this.props.chonSach(this.props.sach.id)}>Chọn mua</button>
            </p>
            <p>{this.props.sach.mota}</p>
        </div>
        return (kq)
        
    }    
    shouldComponentUpdate(){
        console.log("MotSach shouldComponentUpdate");
        return true; //nếu là true thì tiếp tục render , ngược lại sẽ ngưng ko render nữa
    }
    componentDidUpdate(){
        console.log("MotSach componentDidUpdate"); // chạy sau khi Updatecomponent:36 và là cuối cùng
    }
}

export default MotSach;