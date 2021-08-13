import React from 'react';
import { connect } from 'react-redux';

const TienTe = (props) => {
    return (
        <div className="boxtiente">
            <span className="tiente underline" onClick={() => props.doiTienTe('vnd')}>VND</span>
            <strong>   </strong>
            <span className="tiente underline" onClick={() => props.doiTienTe('usd')}>USD</span>
        </div>
    );
}


export const actDoiTien = (loaitien) => {
    return { type: "TIEN_TE", loaitien,};
  };
const mapDispatchToProps = (dispatch) => {  
    return { 
        doiTienTe: (loaitien) => {
            dispatch(actDoiTien(loaitien));
        } ,
     }; 
  };

export default connect( null, mapDispatchToProps)(TienTe);