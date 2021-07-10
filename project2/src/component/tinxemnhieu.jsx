import React from 'react';
import Hientin1 from './hientin1'
function Tinxemnhieu(props) {
    const {listTin} = props;    
    return (
        listTin.map((tin,idx) => (
            <>
            <hr></hr>
            <Hientin1 key={idx}  tin ={tin} />
            </>
        ))
        
        
    );
}

export default Tinxemnhieu;