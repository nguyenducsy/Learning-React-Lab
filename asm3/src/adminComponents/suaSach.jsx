import React from "react";
class SuaSach extends React.Component {  
  constructor(props){ super();
      this.state = {sach:{}, listLoaiSach: [], listSach: null }      
      this.name =  React.createRef();
      this.price =  React.createRef();  
      this.des =  React.createRef();
      this.new =  React.createRef(); 
      this.urlPic  =  React.createRef();
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
      id: this.props.sach.id,
      name: this.name.current.value,
      price: Number(this.price.current.value),
      urlPic:  this.props.sach.urlPic,
      idLoai: this.loai.current.value,
      view: this.view.current.value,
      hot: Number(this.hot.current.value),
      // star: Number(this.star.current.value),
      // sl: Number(this.sl.current.value),   
      // sale: Number(this.sale.current.value),   
      // new: Number(this.new.current.value),   
    }
    let idSach = this.props.sach.id;
    let url=`http://localhost:3500/product/${idSach}`;    
    fetch(url, {  method:"PUT", 
                  body:JSON.stringify(sach), 
                  headers:{'Content-Type':'application/json'}
               } 
    )
    .then(res => res.json())
    .then( d => console.log("Đã cập nhật xong", d) ); 
   
    // this.setState({listSach:arr});
    // window.location.reload()  
}

  render() {
    return (
    <div className="suaLoaiSach m-2">
        <h1>SUA SP</h1>
       <div className="mb-3 chieudoc">
        <input className="form-control" placeholder="Tên loại sách" 
        ref={this.name} defaultValue={this.props.sach.name} onChange={this.handleChange}/>
       </div>
       <div className="mb-3 chieudoc">
        <input className="form-control" placeholder="Tên loại sách" 
        ref={this.price} defaultValue={this.props.sach.price} onChange={this.handleChange}/>
       </div>
       <div className="mb-3 chieudoc">
        <input className="form-control" placeholder="Xem"
         ref={this.view} defaultValue={this.props.sach.view} onChange={this.handleChange}/>
       </div>
       <div className="mb-3 chieudoc">
        <input className="form-control" placeholder="HOT"
         ref={this.hot} defaultValue={this.props.sach.hot} onChange={this.handleChange}/>
       </div>
       <div className="mb-3 chieudoc">
        <input className="form-control" placeholder="Mới"
         ref={this.new} defaultValue={this.props.sach.new} onChange={this.handleChange}/>
       </div>
       <div className="mb-3 chieudoc">
       <select className="form-control" ref={this.loai} onChange={this.handleChange}>
       { this.state.listLoaiSach.map(loai =>(
       <option value={loai.id}>{loai.name}</option>
     ))            
     }</select> <br></br>
      <textarea className="form-control" placeholder="Mô tả"
         ref={this.des} defaultValue={this.props.sach.des} onChange={this.handleChange} />
        
       </div>
       <div className="mb-3 chieudoc">
          <button type="button" className="btn btn-primary" onClick={this.hamSuaSach}>
          Sửa Sản phẩm
          </button>
        </div>
    </div>
  )}
};
export default SuaSach;