import React from 'react';

class FormReg extends React.Component {
        constructor(props){
            super();
        }

    render(){
        return (
        <>
        <div className="formgiua">
        <div id="formContainer" className="dk">
        <div className="formLeft">
        <img src="https://billboardvn.vn/wp-content/uploads/2021/05/D1-1.jpg"/>
        </div>
        <div className="formRight">
        <form>
            <header>
                <h1>Sigh up</h1>
                <p>Sigh up to continue</p>
            </header>
            <section>
                <label>
                    <p>Name</p>
					<input type="text" placeholder=" " ngModel name="name"/>
					<div class="border"></div>
                </label>
                <label>
					<p>Username</p>
					<input type="text" placeholder=" " ngModel name="username"/>
					<div class="border"></div>
                </label>
                <label>
					<p>Password</p>
					<input type="password" placeholder=" " ngModel name="password"/>
					<div class="border"></div>
                </label>
                <label>
                    <p>Avatar</p>
                        <input type="text" ngModel placeholder=" " name="imgUrl"/>
    					<div class="border"></div>
                </label>
                <button type="submit">Sigh up</button>
            </section>
            <footer>
                <button type="button" class="forgotBtn" >Back</button>
            </footer>
        </form>
        </div>
        </div>
        </div>
        </>
        );
    }
}

export default FormReg;