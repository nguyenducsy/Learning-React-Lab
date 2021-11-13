import MotSach from './MotSach';
import { connect } from 'react-redux'; 

const List_Sach = (props) => {
  let listData=[];
  if (props.lisSach!="") 
  console.log(props.listSach);
  props.listSach.forEach(s=>{listData.push(<MotSach sach={s} key={s.id}/>)});   
  return (<div className="listSach">{listData}</div>);
};

const mapState = (state) => {  
  return {  listSach: state.sach, }; 
};
export default connect(mapState, null)(List_Sach);
