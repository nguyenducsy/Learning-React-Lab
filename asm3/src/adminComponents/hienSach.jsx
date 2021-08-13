import React from 'react'
import '../App.css';
// import {actFetchProductsRequest,AddCart} from '../actions'
// import {connect} from 'react-redux';

class HienSach extends React.Component {
    constructor(props){
        super(props);
        this.state = {listSach:[]}
    }

    componentDidMount(){
        let id = Number(window.location.pathname.substring(9))
        let url="http://localhost:3500/product/" + id;
        fetch(url).then(res => res.json()).then(data => {      
          this.setState({listSach:data});
        });
    }

    render(){
        let kq = null
        kq = 
            <article className='bang'>
                <h1>CHI TIẾT SÁCH</h1>
                <aside className="boximg">
                    <img src={"../"+this.state.listSach.urlHinh} alt={this.state.listSach.tensach}/>
                </aside>
                <aside className="boxtext">
                    <aside className="text1"><h3>{this.state.listSach.tensach}</h3></aside><br/>
                    <aside className="text3"><a href>Giá: {this.state.listSach.gia} VNĐ</a></aside><br/>
                    <aside className="text3"><a href>Mô tả: {this.state.listSach.mota}</a></aside><br/>
                </aside>
            </article>            
        return (kq)
    }
}
// const mapStateToProps = state =>{
//     return {
//          _products: state._todoProduct,
//        };
// }
// function mapDispatchToProps(dispatch){
//     return{
//         actFetchProductsRequest:()=>dispatch(actFetchProductsRequest()),
//         AddCart:item=>dispatch(AddCart(item))
      
//     }
// }
export default (HienSach)