import React from "react";
// import Pagination from "react-js-pagination";
class ListSach extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listSach:null
    };
    // this.handlePageChange = this.handlePageChange.bind(this);
  }

//   handlePageChange(pageNumber) {
//     var randDom=Math.random();
//     API.get(`list?v=${randDom}&page=${pageNumber}`)
//         .then(response => {
//             this.setState({
//                 news: response.data.data,
//                 activePage: pageNumber,
//         });
//     })
// }

  componentDidMount(){
    let url="http://localhost:3500/product";
    fetch(url).then(res => res.json()).then(data => {      
      this.setState({listSach:data}); 
    });

    // var randDom=Math.random();
    //   API.get(`list?$v=${randDom}&page=${this.state.activePage}`,{cache:false})
    //     .then(response => {
    //       this.setState({
    //         news: response.data.data,
    //         activePage: response.data.current_page,
    //         itemsCountPerPage: response.data.per_page,
    //         totalItemsCount: response.data.total,
    //       });
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });

    }

    themsach() { 
      this.props.themsach()
    }

    suaSach(id) { 
        let index = this.state.listSach.findIndex( (ls) => { return ls.id===id})
        let sach = this.state.listSach[index];    
        this.props.capnhat(sach)
    }

    xoaSach(id) {    
        let url=`http://localhost:3500/product/${id}`;
        fetch(url, {method:"DELETE"} ).then(res => res.json()).then(data => { 
          let arr = this.state.listSach.filter( s => {
            if (s.id===id) return false; else return true;
          })
          this.setState({listSach:arr});
        });    
    }

  render() {
    let kq =  null;
    if (this.state.listSach !== null)
    kq= <div className="listLoaiSach">
        <h1>DANH SACH SAN PHAM</h1>
        <div class="bang">
        <div className="mb-3 mr">
          <button type="button" className="btn btn-primary" onClick={()=>this.themsach()}>
          Thêm Sản phẩm
          </button>
        </div> 


     <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Ảnh</th>
      <th scope="col">Tên</th>
      <th scope="col">Giá</th>
      <th scope="col">Loại</th>
    </tr>
  </thead>
  <tbody>
     { this.state.listSach.map(sach =>(
    <tr key={sach.id}>
          <th scope="row">{sach.id}</th>
           <td className="anhSach"><img src={sach.urlPic} alt=""/></td> 
           <td><a href={"/xemsach/" + sach.id}>{sach.name}</a></td>    
           <td>{sach.price.toLocaleString()}</td>       
           <td className="button">          
           <button type='button' className='btn btn-sm btn-danger' onClick={()=>this.xoaSach(sach.id)}> Xóa </button>
           </td>
           <td>
           <button type='button' className='btn btn-sm btn-warning' onClick={()=>this.suaSach(sach.id)} > Sửa </button>
           </td>
       </tr>
     ))            
     }
     </tbody>
     </table>
    </div>
    {/* <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={this.state.itemsCountPerPage}
                totalItemsCount={this.state.totalItemsCount}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
            />   */}
             <div className="mb-3">
       
        </div>
   </div>
     return (kq);
};
};
export default ListSach;