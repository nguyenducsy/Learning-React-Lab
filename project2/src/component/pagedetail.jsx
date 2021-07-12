import React from 'react';

class Pagedetail extends React.Component {
    constructor(){
        super();
        this.state = {
            showYK: true
        }    
    }
    changeState = () => {        
        this.setState({
            showYK: !this.state.showYK
        });
    }
    add = () => {
        let name = document.getElementById("namee").value
        console.log(name);
    }
    
        render(){
            return (
             <div className="tin">
                <p className="title"> {this.props.tin.title || "Undefinded"}</p>
                <div dangerouslySetInnerHTML={{__html: this.props.tin.Content}}></div>
                <hr/>
                {/* <button type="button" onClick={this.changeState}> Thêm ý kiến ! </button> */}
                {/* {(this.state.showYK== true)? "FormYkien": ""} */}

                <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Bình luận</button>
                <div class="modal fade" id="exampleModal" tabindex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Thêm bình luận</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                 <form> 
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Họ và tên</label>
                                    <input type="text" name="name" id="namee" class="form-control"/>
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Nội dung</label>
                                    <input type="text" name="name" id="namee" class="form-control"/>
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Ý kiến</label>
                                    <input type="text" name="name" id="namee" class="form-control"/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" >Đặt lại</button>
                                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" onClick={this.add}>Thêm</button>
                                </div>
                          </form> 

                            </div>
                        </div>
                    </div>
                </div>
             </div>
        );


    
}
}

export default Pagedetail;