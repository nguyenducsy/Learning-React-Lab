import React from 'react';
class Comment extends React.Component  {
	constructor(props){
        super();
        // this.state = {name: "" , des: "" };
		console.log(props);
		this.name = React.createRef();
		this.content = React.createRef();
		
    }
    // title = (e) => {
    //     this.state.name = e.target.value;
    //     console.log(this.state);
        
    // }
    // des = (e) => {
    //     this.state.des = e.target.value;
    //     console.log(this.state);
    // }
    addComment = (e) => {
        let  listCm = []
        let item = {
            name: this.name.current.value,
            des : this.content.current.value
        }
        const comments =  JSON.parse(localStorage.getItem('comment'));
        if (comments === null) {
            listCm.push(item)
            localStorage.setItem('comment' , JSON.stringify(listCm));
        }
        else {
            comments.push(item)
            localStorage.setItem('comment' , JSON.stringify(comments));
        }
        // window.location.reload();
        e.preventDefault();
	}

    render() {
		return (
        <>
       <h3 id="reply-title" className="comment-reply-title">
	                        <span>Leave a reply</span>
	                     </h3>
	                <form className="comment-form" onSubmit={this.addComment}>
	                    <p className="comment-form-name">
	                        <label>Your name</label>
	                        <input className="form-control" name="name" ref={this.name} />
	                        </p>
	                        <p className="comment-form-comment">
	                        <label>Comment</label>
	                        <textarea className="form-control" name="comment" cols="45" rows="8" aria-required="true" ref={this.content}></textarea>
	                        </p>
	                        <p>
								<button className="btn btn-primary form-submit">Gửi</button>
	                                                                        {/* <input name="submit" className="btn btn-primary form-submit" value="Post Comment" type="submit" /> */}
	                        </p>
	                    </form>
        </>
        );
};

}
export default Comment;