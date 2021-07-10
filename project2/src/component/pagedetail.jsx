import React from 'react';

class Pagedetail extends React.Component {

    render(){
        return (
         <div className="tin">
            <p> {this.props.tin.title}</p>
            <div dangerouslySetInnerHTML={{__html: this.props.tin.Content}}></div>
         </div>
    );

    
}
}

export default Pagedetail;