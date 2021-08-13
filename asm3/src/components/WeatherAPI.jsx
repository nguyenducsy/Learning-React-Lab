
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
class FormSearchPic extends React.Component{
constructor(){
    super();
    this.state = {pictures:[]};
    this.timhinh()
}

timhinh = () =>  {
    let apiKey = "ca36298ea9ffb6711e100aaeded0f8c0";
    var lat = 10.792858;
    var long = 106.618599;
    let url=`http://api.openweathermap.org/data/2.5/weather?lang=vi&lat=${lat}&lon=${long}&appid=${apiKey}`;
    fetch (url)    
    .then(function(res) {
        if (!res.ok) throw Error(res.statusText);  
        return res.json();  //dùng text() nếu dạng text
    })
    .then(function(data) { 
        let weather = data;
        // console.log(weather);
        localStorage.setItem('thoitiet' , JSON.stringify(weather));
       
    })
    .catch(function(error) { console.log('Có lỗi nè : \n', error); });
}


render(){
    const tt = JSON.parse(localStorage.getItem('thoitiet'));
    // alert( `Thời tiết ở : ${weather.sys.country} ${weather.name} là : ${weather.weather[0].description}` )
const kq=<> |   {tt.sys.country}  {tt.weather[0].description} </>
        
return (kq)
}
}
export default FormSearchPic