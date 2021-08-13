import React from 'react';
import MotPro from './MotProduct'
import { connect } from 'react-redux'; 

class ListHot extends React.Component {
    constructor(props){
        super();
        const {listHot} = props;
        console.log(props.listPro);
    }

    	//format 
	formatter = new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
		minimumFractionDigits: 0
	  })
    render() {
        return (
            this.props.listPro.map((p,idx)  => {
                if (parseInt(p.hot)===1) {         
                    let n =  "" + p.name;  // change to string 
                return(
                    <li>
          		    <a href={"/?id="+ p.id}>
                    <img width="200" height="200" src={p.urlPic} alt="" />
                    <span className="product-title" >{n.slice(0,20)}...</span>
                    </a>
                    <div className="star-rating">
                    <span className={"star-rating-width" + p.star*20}></span>
                    </div>
                <span className="amount">Giá:  {this.formatter.format(p.price)}</span>
                </li>
                );
                }
            })
        );
    };
}

const mapState = (state) => {  
    return { listPro : state.product, }; 
  };
export default connect(mapState, null)(ListHot);
