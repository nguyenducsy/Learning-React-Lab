import React from "react";
class ListLoaiSach extends React.Component {
  constructor(props){
    super(props);
    this.state = {listLoaiSach:null}
  }
  componentDidMount(){
    let url="http://localhost:3500/catalog";
    fetch(url).then(res => res.json()).then(data => {      
      this.setState({listLoaiSach:data}); 
    });
    }

    suaLoaiSach(id=1) { 
        let index = this.state.listLoaiSach.findIndex( (ls) => { return ls.id===id})
        let loaisach = this.state.listLoaiSach[index];    
        this.props.capnhat(loaisach)
        
    }

    themloai() { 
      this.props.themloai()
    }

    xoaLoaiSach(id) {    
        let url=`http://localhost:3500/catalog/${id}`;
        fetch(url, {method:"DELETE"} ).then(res => res.json()).then(data => { 
          let arr = this.state.listLoaiSach.filter( s => {
            if (s.id===id) return false; else return true;
          })
          this.setState({listLoaiSach:arr});
        });    
    }

  render() {
    let kq =  null;    
    if (this.state.listLoaiSach!==null)
    kq= <div className="listLoaiSach">
        <h1>DANH SACH LOAI</h1>
        <div class="bang">
        <div className="mb-3 mr">
          <button type="button" className="btn btn-primary" onClick={()=>this.themloai()}>
          Thêm Danh mục
          </button>
        </div> 
     <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Tên Loại</th>
      <th scope="col">Thứ tự</th>
      <th scope="col">Ẩn/Hiện</th>
    </tr>
  </thead>
  <tbody>
  { this.state.listLoaiSach.map( loai =>(
    <tr key={loai.id}>
      <th scope="row">{loai.id}</th>
          <td>{loai.name}</td>    
          <td>{loai.sort}</td>  
          <td>{loai.show === 1 ? "Đang hiện" : "Đang ẩn"}</td>    
           <td className="button">          
           <button type='button' className='btn btn-sm btn-danger' onClick={()=>this.xoaLoaiSach(loai.id)}> Xóa </button>
           </td>
           <td>
           <button type='button' className='btn btn-sm btn-warning' onClick={()=>this.suaLoaiSach(loai.id)} > Sửa </button>
           </td>
    </tr>
     ))   
    }         
  </tbody>
</table>

    </div> 
   </div>
     return (kq);
};
};
export default ListLoaiSach;