// conponents/ThemSach.js
import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { actThemSach } from '../actions/actSach'; //Import các actions 
function ThemSach(props) {
  const [content, setContent] = useState(); 
  const refTenSach = useRef('');
  const refGia = useRef('');
  const hamThemSach = () => {
    props.ThemSach( refTenSach.current.value,  refGia.current.value); 
    refTenSach.current.value = ''; 
    refGia.current.value = '';  
  };

  return (
    <div className="col-md-12">
        <footer>Thêm sách</footer>
       <div className="mb-3">
        <input className="form-control" placeholder="Tên sách" ref={refTenSach} />
       </div>
       <div className="mb-3">
        <input className="form-control" placeholder="Giá" ref={refGia}/>
       </div>
       <div className="mb-3">
          <button type="button" className="btn btn-primary" onClick={hamThemSach}>
            Thêm
          </button>
        </div>
    </div>
  );
} 
const mapDispatch = (dispatch) => {
  return {
    ThemSach: (tensach, gia) => {
      dispatch(actThemSach(tensach, gia));
    },
  };
};
export default connect(null, mapDispatch)(ThemSach);
