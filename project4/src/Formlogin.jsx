import React from 'react';

class FormLogin extends React.Component {
    constructor(){
        super();
        this.state = {name:'' , pass:""}
    }
    getName = (e) => {
        this.state.name = e.target.value;
        console.log(this.state);
        
    }
    getPass = (e) => {
        this.state.pass = e.target.value;
        console.log(this.state);

    }
    login = (e) => {
        console.log(this.state);
        e.preventDefault();
    }
    render (){
        const kq = 
        <form onSubmit={this.login}>
            <div className="mb-3">
                <label > User name</label>
                <input type="text" onChange={this.getName} className="form-control" />
            </div>
            <div className="mb-3">
                <label >Password</label>
                <input type="password" onChange={this.getPass} className="form-control" name="" id=""/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    return(kq);
    }

}

export default FormLogin;