import React from 'react';
import axios from 'axios';

export default class SingUp extends React.Component {

	constructor(props) {
		super(props);

		this.handleName = this.handleName.bind(this);
		this.handleMailID = this.handleMailID.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
		this.validatePassword = this.validatePassword.bind(this);
		this.submitForm = this.submitForm.bind(this);

		this.state = {
			name: '',
			mailid: '',
			password: '',
			getpassword: false,
			confirmpassword: '',
			getconfirmpassword: false,
			passwordvalidation: false,
		};
	}

	handleName(e) {
		this.setState({
			name: e.target.value,
		});
	}
	handleMailID(e) {
		this.setState({
			mailid: e.target.value,
		});
	}
	handlePassword(e) {
		this.setState({
			password: e.target.value,
			getpassword: true,
		});
	}
	handleConfirmPassword(e) {
		this.setState({
			confirmpassword: e.target.value,
			getconfirmpassword: true,
		});
	}
	validatePassword() {
		if (this.state.password === this.state.confirmpassword) {
			this.setState({
				passwordvalidation: true
			});
		} else {
			window.alert('Password mis-match');
		}
	}
	submitForm(e) {
		e.preventDefault();
		const signindata = {
			name: this.state.name,
			mailid: this.state.mailid,
			password: this.state.password
		};

		this.validatePassword()
		if (this.state.passwordvalidation) {
			if (this.state.name && this.state.mailid) {
				axios.post('http://localhost:5000/signin', signindata).then(res => {
					// call home of the app for now set values to delaut

					window.alert('User Added!!');

					this.setState({
						name: '',
						mailid: '',
						password: '',
						getpassword: false,
						confirmpassword: '',
						getconfirmpassword: false,
						passwordvalidation: false,
					});
				});
			} 
			else {
				window.alert('Fill the data in all field');
			}
		}
		else {
			window.alert('Password mismatch!!');
		}
	}

	render() {
		//if (this.state.getpassword && this.state.getconfirmpassword) {
		//	this.validatePassword()
		//}
		return (
			<div>
				<form onSubmit={this.submitForm}>
					<label> Name </label>
					<input type="text" value={this.state.name}  onChange={this.handleName} />
					<br></br>
					<label> MailID </label>
					<input type='text' value={this.state.mailid} onChange={this.handleMailID} />
					<br></br>
					<label> Password </label>
					<input type="password" value={this.state.password} onChange={this.handlePassword} />
					<br></br>
					<label> ConfirmPassword </label>
					<input type="password" value={this.state.confirmpassword} onChange={this.handleConfirmPassword} />
					<br></br> 
					<input type='submit' value='Submit'/>
				</form>
			</div>
		);
	}
}