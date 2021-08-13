import React from 'react';

class Loai extends React.Component {
  constructor(props){  
      super(); 
    }

    // componentDidMount(id){
    //     let url="http://localhost:3700/loaisach" + id;
    //     fetch(url).then(res => res.json()).then(data => {      
    //       this.setState({listLoaiSach:data}); 
    //     });
    // }

  render(){
    const kq = 
        <a href>{this.props.Loai.tenloai}</a>   
    return (kq);
  }
}
export default Loai;
