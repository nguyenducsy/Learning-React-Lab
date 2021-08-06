import React from 'react';

import { BrowserRouter, Route, Link  } from 'react-router-dom';

class FormLog extends React.Component {
        constructor(props){
            super();
        }

    render(){
        return (
        <>
        <div className="formgiua">
        <div id="formContainer" className="dn">
        <div className="formLeft">
        <img src="https://billboardvn.vn/wp-content/uploads/2021/05/D1-1.jpg"/>
        </div>
        <div className="formRight">
            <form id="login">
                <header>
                    <h1>Login</h1>
                    <p>Login to continue</p>
                </header>
                <section>
                    <label>
                        <p>Username</p>
                        <input type="text"  placeholder=" "  formControlName="username" required minlength = "23"/>
                        <div className="border"></div>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" placeholder=" "  formControlName="pass"/>
                        <div className="border"></div>
                    </label>
                    <button type="submit">Login</button>
                </section>
                <footer>
                    <button type="button" className="forgotBtn">Forgot password?</button>
                    <Link to="register">  <button type="button" className="registerBtn">  <a className="nav-link">Need an account?</a></button></Link> 
                </footer>
            </form> 
        </div>
        </div>
        </div>
        </>
        );
    }
}

export default FormLog;