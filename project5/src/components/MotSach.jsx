import React from 'react';
import '../MotSach.css';
import { connect } from "react-redux";
import { actXoaSach } from '../actions/actSach'; //Import các actions 
class MotSach extends React.Component {
  constructor(props){ 
    super(); 
    let  id = props.sach.id;
    const XoaSach = () => { props.removeNote(id) }
  }

  
  render(){
    const kq =
    <div className='MotSach' >
        <h3>{this.props.sach.tensach}</h3>     
        <img src={this.props.sach.urlHinh} alt=''/>
        <p className="gia">{this.props.sach.gia.toLocaleString('vi-VN')} VNĐ</p>
        <p className="button">          
          <button className='btn' type='button' onClick={this.XoaSach}>Xóa</button>
          <button className='btn' type='button'>Chọn</button>
        </p>        
    </div>
    return (kq);
  }
}

// chuyển dispatch thành props
const mapDispatchToProps = (dispatch) => {
  return {
    // editNote: (id,content) => {dispatch(actEditNote(id, content)); },
    removeNote: id => {  dispatch(actXoaSach(id)); }
  };
};

export default connect(null, mapDispatchToProps)(MotSach);

