import React from 'react';
import { connect } from 'react-redux';

class Catalog extends React.Component {
    constructor(props) {
        super();
        this.state = {
             param: "" , id: '' 
		}    
        // if (this.state.id != null) {
            this.state.param =  new URLSearchParams(window.location.search);
            this.state.id = this.state.param.get("id");
            
            console.log(this.state.id);
        // }
        // GetProByID(this.state.id)

    }

    // GetProByID (id) {
    //     // alert(id)
    //     console.log(id);
        
    // }
    render () {
        return (
        this.props.listCate.map((p) =>{   
            return  <li> <a href= {"/danhmuc?id=" + p.id }  >  {p.name} </a> <span className="count">({p.sort})</span> </li>	 
        })
        )
    };

    
  

} 
    const mapState = (state) => {  
        return { listCate : state.catalog, }; 
    };

export default connect(mapState, null)(Catalog);