
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
class FormSearchPic extends React.Component{
constructor(){
    super();
    this.state = {pictures:[]};
    this.tukhoa = React.createRef();
}
timhinh = async (e) =>  {
    let tk = this.tukhoa.current.value;
    let page=1;
    let per_page=10;
    let key = "Kt5d-GWtkku3mY7FXpuYw4S5h3ewFzzZPJG7qrP6toM"
    let url=`https://api.unsplash.com/search/photos?query=${tk}&page=${page}&per_page=${per_page}&client_id=${key}`;
    await axios.get(url)    
    .then(function(res) { 
        let pictures = res.data.results;
        let listPic=[];
        pictures.forEach(function( p , index){
            console.log(p.urls.regular);
            listPic.push(<img src={p.urls.regular} height="150" />)
        })
        ReactDOM.render(listPic, document.getElementById("kqSeachPic"));
    })
    .catch(function(error) { console.log('Có lỗi nè : \n', error); });
}
// async timhinh(e)  {
//     let tk = this.tukhoa.current.value;
//     let page=1;
//     let per_page=20;
//     let key = "Kt5d-GWtkku3mY7FXpuYw4S5h3ewFzzZPJG7qrP6toM"
//     let url=`https://api.unsplash.com/search/photos?query=${tk}&page=${page}&per_page=${per_page}&client_id=${key}`;
//     await axios.get(url)    
//     .then(function(res) { 
//         let pictures = res.data.results;
//         let listPic=[];
//         pictures.forEach(function( p , index){
//             console.log(p.urls.regular);
//             listPic.push(<img src={p.urls.regular} height="150" />)
//         })
//         ReactDOM.render(listPic, document.getElementById("kqSeachPic"));
//     })
//     .catch(function(error) { console.log('Có lỗi nè : \n', error); });
// }
render(){
const kq=
<div  className="bg-secondary">
    <form className="p-2" >
        <input ref={this.tukhoa} className="form-control" placeholder="Nhập tên hình"/>
        <p></p>
        <button  onClick={this.timhinh} type="button" 
        className="btn btn-primary">Tìm hình</button>
    </form>
    <div id="kqSeachPic"/>
</div>
return (kq)
}
}
export default FormSearchPic