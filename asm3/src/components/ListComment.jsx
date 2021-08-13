import React from 'react';

class ListComment extends React.Component  {
	constructor(props){
        super();
        this.state = {comments: [] , content:""}
        this.state.comments =  JSON.parse(localStorage.getItem('comment'));
         console.log(this.state.comments);
         
    }
    render() {

        if  (this.state.comments === null)  return <></>
        else{  
            return (
            this.state.comments.map((p) => {      
                return (
           <>
                       <li className="comment">
                       <div className="comment_container">
                           <img alt="" src="images/avatar/user-1.jpg" className="avatar" height="60" width="60" />
                           <div className="comment-text">
                               <div className="star-rating">
                               <span width="90%"></span>
                               </div>
                               <p className="meta">
                               <strong>{p.name}</strong> &ndash; <time datetime="2014-10-12T15:33:24+00:00">June 7, 2013</time>:
                               </p>
                               <div className="description">
                               <p>{p.des}</p>
                               </div>
                           </div>
                               </div>
                           </li>
                </>  
                )
           })
        )
       }


}
}
export default ListComment;