import React from 'react';
import './Login.css';

class Login extends React.Component {
    render() {
        return(
			<div class="wrapper fadeInDown">
			<div id="formContent">		  
			  <div className="fadeIn first card-header">
				<div className="row">
					<div className="col-6"><a href="/login">Login</a></div>
					<div className="col-6"><a href="/signup">Register</a></div>
				</div>
			  </div>
		  
			  <form>
				<input type="text" id="login" className="fadeIn second" name="login" placeholder="email"/>
				<input type="text" id="password" className="fadeIn third" name="password" placeholder="password"/>
				<input type="submit" className="fadeIn fourth" value="Log In"/>
			  </form>
		  
			  <div id="formFooter">
				<a className="underlineHover" href="#">Forgot Password?</a>
			  </div>
		  
			</div>
		  </div>
        )
    }
}

export default Login;