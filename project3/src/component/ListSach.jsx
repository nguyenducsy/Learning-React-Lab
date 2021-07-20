import React from 'react';
import MotSach from './ShowMotSach';
export default class ListSach extends React.Component{
    constructor(props){
        super();
        this.state={soSachDaChon:0, idSachDaChon:[]}
    }
    chonSach=(idSach) => {  
        this.state.idSachDaChon.push(idSach);
        this.state.soSachDaChon++;
        this.props.capNhatGioHang(idSach);
    }
    render(){
        let listsach = []; 
        this.props.listSach.forEach( sach => {
            // console.log(sach);
            listsach.push( <MotSach chonSach={this.chonSach} key = {sach.id} sach={sach}/>);
        });
        let kq = 
            <div className = "listSach_container">
                <h2>{this.props.caption}</h2>
                <div className="listSach">{listsach}</div>
            </div>
        return (kq);
    }
}