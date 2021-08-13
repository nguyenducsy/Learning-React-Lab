import React from "react";
class ThemSach extends React.Component {  
  constructor(props){ super();
      this.state = {sach:{}, listLoaiSach: []}      
      this.name =  React.createRef();
      this.price =  React.createRef();  
      this.des =  React.createRef();
      this.new =  React.createRef(); 
      this.urlPic =  React.createRef();
      this.loai =  React.createRef();  
      this.view =  React.createRef();
      this.hot =  React.createRef();     
      this.handleChange = this.handleChange.bind(this)    
  }

  componentDidMount(){
    let url="http://localhost:3500/catalog";
    fetch(url).then(res => res.json()).then(data => {      
      this.setState({listLoaiSach:data}); 
    });
    }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  hamSuaSach = () => {  
    let sach = {
      id: this.props.id,
      name: this.name.current.value,
      price: Number(this.price.current.value),
      urlPic:  this.urlPic.current.value,
      idLoai: Number(this.loai.current.value),
      view: Number(this.view.current.value),
      hot: Number(this.hot.current.value),
      new: Number(this.new.current.value),
      des: this.des.current.value      
    }
    let url=`http://localhost:3500/product`;    
    fetch(url, {  method:"POST", 
                  body:JSON.stringify(sach), 
                  headers:{'Content-Type':'application/json'}
               } 
    )
    .then(res => res.json())
    .then( d => console.log("Đã cập nhật xong", d)); 
    // this.setState({listSach:arr});
    // window.location.reload()  
}

  render() {
    return (
    <div className="suaLoaiSach m-2">
        <h1>THEM SP</h1>
       <div className="mb-3 chieudoc">
        <input className="form-control" placeholder="Tên sách" 
        ref={this.name} onChange={this.handleChange}/>
       </div>
       <div className="mb-3 chieudoc">
        <input className="form-control" placeholder="Giá sách" 
        ref={this.price} onChange={this.handleChange}/>
       </div>
       <div className="mb-3 chieudoc">
        <input type="file" className="form-control" placeholder="Xem"
         ref={this.urlPic} onChange={this.handleChange}/>
       </div>
       <div className="mb-3 chieudoc">
        <input className="form-control" placeholder="Xem"
         ref={this.view} onChange={this.handleChange}/>
       </div>
       <div className="mb-3 chieudoc">
        <input className="form-control" placeholder="HOT"
         ref={this.hot} onChange={this.handleChange}/>
       </div>
       <div className="mb-3 chieudoc">
        <input className="form-control" placeholder="Mới"
         ref={this.new} onChange={this.handleChange}/>
       </div>
       <div className="mb-3 chieudoc">
       <select className="form-control" ref={this.loai} onChange={this.handleChange}>
       { this.state.listLoaiSach.map(loai =>(
       <option value={loai.id}>{loai.name}</option>
     ))            
     }</select> <br></br>
      <textarea className="form-control" placeholder="Mô tả"
         ref={this.des} onChange={this.handleChange} />
        
       </div>
       <div className="mb-3 chieudoc">
          <button type="button" className="btn btn-primary" onClick={this.hamSuaSach}>
          Thêm Sản phẩm
          </button>
        </div>
    </div>
  )}
};
export default ThemSach;