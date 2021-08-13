import ReactDOM from 'react-dom';
import App from '../App';

function no() {
    const Item_local_new = JSON.parse(localStorage.getItem('listcart'));
    let n = 0;
    if (Item_local_new != null) {
        n += Item_local_new.length;
    }
    console.log(n);
    // App()
    return n;
    // ReactDOM.render( <nav> {n} </nav> , document.getElementById("numberCart"))
    }
    export default no;