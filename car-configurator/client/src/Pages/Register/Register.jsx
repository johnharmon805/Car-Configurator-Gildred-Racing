import React from 'react';
import './Register.css';

function Register(){
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
			  	<input type="text" id="name" class="fadeIn second" name="login" placeholder="name"/>
			  	<input type="text" id="email" class="fadeIn third" name="login" placeholder="email"/>
				<input type="text" id="username" class="fadeIn fourth" name="login" placeholder="new username"/>
				<input type="text" id="password" class="fadeIn fifth" name="login" placeholder="password"/>
				<input type="submit" class="fadeIn fourth" value="Sign Up"/>
			  </form>
		  
			  <div id="formFooter">
			  </div>
		  
			</div>
	</div>
)
}

export default Register;