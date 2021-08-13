import React from 'react';
import { BrowserRouter, Route, Link  } from 'react-router-dom';

import { connect } from 'react-redux';

class Catalog extends React.Component {
    constructor(props) {
        super();
      
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
            return  <li>  <a href={"/?idloai=" + p.id }  >  {p.name} </a> <span className="count">({p.sort})</span>   </li>	
        })
        )
    };

    
  

} 
    const mapState = (state) => {  
        return { listCate : state.catalog, }; 
    };

export default connect(mapState, null)(Catalog);