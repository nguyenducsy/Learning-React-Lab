import React from 'react';


class ListChay extends React.Component {
    constructor(props){
        super();
        const {listChay} = props;
        console.log(props);
    }

    render() {
        return (
            this.props.listChay.map((p,idx)  => {
                if (parseInt(p.new)===1) {         
                    let n =  "" + p.name;  // change to string 
                return(   
                    <li>
					 <a href={"/?id="+ p.id}>
                    <img width="200" height="200" src={p.urlPic} alt="" />
                    <span className="product-title" >{n.slice(0,45)}...</span>
                    </a>
                    <div className="star-rating">
                    <span className={"star-rating-width" + p.star*20}></span>
                    </div>
                     <span className="amount">Giá:  {this.props.format.format(p.price)}</span>
                </li>
                );
                }
            })
        );
    };
}

export default ListChay;