import React from 'react';
import OnceSTR from './onceSTR'
function tinmoi(props) {
    let listTin = []
    props.tinNew.forEach(tin => {
        listTin.push(<OnceSTR tin = {tin}/> )
    });
    return listTin;
}

export default tinmoi;