import React from 'react';
import '../MotSach.css';
import { connect } from "react-redux";
import { actXoaSach } from '../actions/actSach'; //Import các actions 
class MotSach extends React.Component {
  constructor(props){ 
    super(); 
    let  id = props.sach.id;
    // const XoaSach = () => { props.removeNote(id) }
  }

  formatter = new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
		minimumFractionDigits: 0
	  })
  giaSp = (gia) => {
		if (this.props.tiente.kyhieutien === 'usd') {
			return (gia/23000).toFixed(2) + ' USD' ;
		}
		else return this.formatter.format(gia) 

	}
  
  render(){

    const kq =
    <div className='MotSach' >
        <h3>{this.props.sach.tensach}</h3>     
        {/* <img src={this.props.sach.urlHinh} alt=''/> */}
        {/* <p className="gia">{this.props.sach.gia.toLocaleString('vi-VN')} VNĐ</p> */}
            {/* <p className="gia">{this.giaSp(this.props.sach.gia)}</p> */}
            <p className="">{this.props.sach.TomTat}</p>
            {/* <p className="gia">{this.props.sach.Ngay}</p> */}
        <p className="button">          
          {/* <button className='btn' type='button' onClick={() => this.props.xoasach(this.props.sach.id)}>Xóa</button>
          <button className='btn' type='button'>Chọn</button> */}
        </p>        
    </div>
    return (kq);
  }
}

// chuyển dispatch thành props
const mapDispatchToProps = (dispatch) => {
  return {
    // editNote: (id,content) => {dispatch(actEditNote(id, content)); },
    xoasach: id => {  dispatch(actXoaSach(id)); }
  };
};
const mapState = (state) => {
	return {  tiente : state.tiente ,
                listSach: state.sach,}

}


export default connect(mapState, mapDispatchToProps)(MotSach);



