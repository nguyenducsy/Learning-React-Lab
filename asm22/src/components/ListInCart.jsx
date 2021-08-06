import React from 'react';
import MotItem from './MotItemCart'
import no from './no'

class ListInCart extends React.Component {
    constructor(props){
        super();
        this.state = {list: ''}
        const listcart = JSON.parse(localStorage.getItem("listcart"));
        this.state.list = listcart      
    }

    GetProByID = (id) =>{
        let arrDaxoa = []
        for (let i = 0; i < this.state.list.length; i++) {          
            if (this.state.list[i].id !== id) {
                // console.log("Da xoa", this.state.list[i]);
                arrDaxoa.push(this.state.list[i]);
            }
            // console.log(id,arrDaxoa);
            localStorage.setItem('listcart', JSON.stringify(arrDaxoa));
        }
        window.location.reload()
        no()
    }
    render (){

         if  (this.state.list === null)  return <></>

         else{  
            return (
           
                this.state.list.map((p,idx) => {      
                    
                return  <MotItem GetProByID={this.GetProByID} key= {idx} item = {p} />
                })
            );
        };
};
}

export default ListInCart;