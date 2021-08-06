import MotSach from './MotSach';
import React, { useState } from "react";

const TrangChu = () => {
    const [listSach, ganlistSach] = useState([]);
    React.useEffect(() => {
        let url="http://localhost:3500/sach";
        fetch(url).then(res => res.json()).then(data => {      
          ganlistSach(data); 
          console.log("Lấy sách từ server về xong", data);
        });
      }, []);
    
      let listData=[];
      listSach.forEach(s=>{listData.push(<MotSach sach={s} key={s.id}/>)});   
      return (<div className="listSach">{listData}</div>);
    
};
export default TrangChu;
