// conponents/ThemSach.js
import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { actThemSach } from '../actions/actSach'; //Import các actions 
function ThemSach(props) {
  const [content, setContent] = useState(); 
  const refTenSach = useRef('');
  const refTT = useRef('');
  const hamThemSach = () => {
    props.ThemSach( refTenSach.current.value,  refTT.current.value); 
    refTenSach.current.value = ''; 
    refTT.current.value = '';  
  };

  return (
    <div className="col-md-12">
      <p></p>
        <h2>Thêm Tin</h2>
        <div className="mb-3">
        <input className="form-control" placeholder="idTin" disabled="disabled" />
       </div>
       <div className="mb-3">
        <input className="form-control" placeholder="Tiêu đề" ref={refTenSach} />
       </div>
       <div className="mb-3">
         {/* <input type="text"/> */}
         
         <textarea className="form-control" placeholder="Tóm tắt" ref={refTT} name="" id="" cols="30" rows="10"/>
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

    ThemSach: (tensach, tomtat) => {
      console.log( tensach, tomtat);
      dispatch(actThemSach(tensach, tomtat));
    },
  };
};
export default connect(null, mapDispatch)(ThemSach);
