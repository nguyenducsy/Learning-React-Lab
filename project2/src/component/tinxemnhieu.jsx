import React from 'react';
import Hientin1 from './hientin1'
function Tinxemnhieu(props) {
    const {listTin} = props;    

    return (
        //{} của map lose 3h :?
        listTin.map((tinn,idx) =>   (     
            <>
            <hr></hr>
            <Hientin1 key={idx}  tin = {tinn} />
            </>
        ))
        
    );
}

export default Tinxemnhieu;