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
					<div className="col-6"><a href="/register">Register</a></div>
				</div>
			  </div>
		  
			  <form>
				<input type="text" id="login" class="fadeIn second" name="login" placeholder="username"/>
				<input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
				<input type="submit" class="fadeIn fourth" value="Log In"/>
			  </form>
		  
			  <div id="formFooter">
				<a class="underlineHover" href="#">Forgot Password?</a>
			  </div>
		  
			</div>
		  </div>
        )
    }
}

export default Login;