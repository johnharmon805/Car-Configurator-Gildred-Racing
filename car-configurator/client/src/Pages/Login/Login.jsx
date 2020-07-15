import React from 'react';
import './Login.css';
import API from '../../Utils/API'

class Login extends React.Component {
	state= {
		email: '',
		password: '',
		redirect: false,
		loggedIn: false
	}
	handleFormSubmit = (event) => {
		event.preventDefault()
		if (this.state.email && this.state.password) {
		API.userLogin({email: this.state.email, password: this.state.password})
		.then(()=>{
			this.setState({
				redirect: true,
				loggedIn: true
			})
			window.location.href = '/profile';
		}
		)
		.catch(err => console.log(err))
	}
	}
	handleChange = (event) => {
		const {name, value} = event.target;
		this.setState({
			[name]: value
		})
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
				<input type="text" id="login" className="fadeIn second" name="email" placeholder="email" onChange={this.handleChange}/>
				<input type="text" id="password" className="fadeIn third" name="password" placeholder="password" onChange={this.handleChange}/>
				<input type="submit" className="fadeIn fourth" value="Log In" onClick={this.handleFormSubmit}/>
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