import React from "react";
class ThemLoai extends React.Component {  
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

  hamThemLoai = () => {  
    let loaisach = {
      id: this.props.id,
      name: this.name.current.value,
      sort: this.sort.current.value,
      show: Number(this.show.current.value),      
    }
    let url=`http://localhost:3500/catalog`;    
    fetch(url, {  method:"POST", 
                  body:JSON.stringify(loaisach), 
                  headers:{'Content-Type':'application/json'}
               } 
    )
    .then(res => res.json())
    .then( d => console.log("Đã them", d)); 
    // window.location.reload() 
}

  render() {
    return (
    <div className="suaLoaiSach m-2">
        <h2>THEM LOAI</h2>
       <div className="mb-3 chieudoc">
        <input className="form-control" placeholder="Tên loại sách" 
        ref={this.name} onChange={this.handleChange}/>
       </div>
       <div className="mb-3 chieudoc">
        <input className="form-control" placeholder="Thứ tự"
         ref={this.sort} onChange={this.handleChange}/>
       </div>
       <div className="mb-3 chieudoc">
        <select className="form-control" ref={this.show} onChange={this.handleChange}>
          <option value="0">Ẩn Loại</option>
          <option value="1">Hiện Loại</option>
        </select>
        
       </div>
       <div className="mb-3">
          <button type="button" className="btn btn-primary" onClick={this.hamThemLoai}>
          Thêm Loại 
          </button>
        </div>
    </div>
  )}
};
export default ThemLoai;