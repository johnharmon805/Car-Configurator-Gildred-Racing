import React from 'react';
import './Register.css';

class Register extends React.Component {
state={
	name: "",
	email: "",
	password: ""
}
handleChange = (event) => {
	const {name, value} = event.target;
	this.setState({
		[name]: value
	})
}
handleSubmit = (event) => {
	// alert(JSON.stringify(this.state));
	event.preventDefault()
	fetch("/signup", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(this.state)
		// body: this.state
	}).then((res) => {
		console.log(res)
		alert(`User logged ${this.state.name} in`);
	});
}
render() {
return(
    <div className="wrapper fadeInDown">
			<div id="formContent">		  
			  <div className="fadeIn first card-header">
				<div className="row">
					<div className="col-6"><a href="/login">Login</a></div>
					<div className="col-6"><a href="/signup">Register</a></div>
				</div>
			  </div>
		  
			  <form>
			  	<input type="text" id="name" className="fadeIn second" name="name" placeholder="name" onChange={this.handleChange}/>
			  	<input type="text" id="email" className="fadeIn third" name="email" placeholder="email" onChange={this.handleChange}/>
				<input type="text" id="password" className="fadeIn fifth" name="password" placeholder="password" onChange={this.handleChange}/>
				<input type="submit" onClick={this.handleSubmit} className="fadeIn fourth" value="Sign Up"/>
			  </form>
		  
			  <div id="formFooter">
			  </div>
		  
			</div>
	</div>
)}
}

export default Register;