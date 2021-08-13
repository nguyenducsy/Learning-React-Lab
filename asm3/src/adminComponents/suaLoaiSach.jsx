import React from "react";
import Admin from '../Admin';
class SuaLoaiSach extends React.Component {  
  constructor(props){ super();
      this.state = {loaisach:{} }      
      this.name =  React.createRef();
      this.sort =  React.createRef();      
      this.show =  React.createRef();  
      this.handleChange = this.handleChange.bind(this)    

  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  hamSuaLoaiSach = () => {  
    let loaisach = {
      id: this.props.loaisach.id,
      name: this.name.current.value,
      sort: this.sort.current.value,
      show: Number(this.show.current.value),      
    }
    let idLoaiSach = this.props.loaisach.id;
    let url=`http://localhost:3500/catalog/${idLoaiSach}`;    
    fetch(url, {  method:"PUT", 
                  body:JSON.stringify(loaisach), 
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
      <h2>SUA LOAI</h2>
       <div className="mb-3 chieudoc">
        <input className="form-control" placeholder="Tên loại sách" 
        ref={this.name} defaultValue={this.props.loaisach.name} onChange={this.handleChange}/>
       </div>
       <div className="mb-3 chieudoc">
        <input className="form-control" placeholder="Thứ tự"
         ref={this.sort} defaultValue={this.props.loaisach.sort} onChange={this.handleChange}/>
       </div>
       <div className="mb-3 chieudoc">
        {(this.props.loaisach.show === 0) ? (
        <select className="form-control" ref={this.show} onChange={this.handleChange}>
          <option value="0">Ẩn Loại</option>
          <option value="1">Hiện Loại</option>
        </select>
      ) : (
        <select className="form-control" ref={this.show} onChange={this.handleChange}>
          <option value="1">Hiện Loại</option>
          <option value="0">Ẩn Loại</option>
        </select>
       )} 
        
       </div>
       <div className="mb-3 chieudoc">
          <button type="button" className="btn btn-primary" onClick={this.hamSuaLoaiSach}>
          Sửa Loại
          </button>
        </div>
    </div>
  )}
};
export default SuaLoaiSach;