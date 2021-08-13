import ListSach from './ListSach';
import React, { useState } from "react";
import { connect } from 'react-redux'; 

class TrangChu extends React.Component {
  constructor(props){ 
    super();
  }

    render(){
        return <ListSach/>;
      }

};
const mapState = (state) => {  
  return {  listSach: state.sach, }; 
};
export default connect(mapState, null)(TrangChu);
