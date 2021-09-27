import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Login extends React.Component {
	constructor(props) {
		super(props);

		this.handleName = this.handleName.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.onSubmitCredentials = this.onSubmitCredentials.bind(this);

		this.state = {
			name: '',
			password: ''
		};
	}

	handleName(e) {
		this.setState({
			name: e.target.value
		});
	}
	handlePassword(e) {
		this.setState({
			password: e.target.value
		});
	}
	onSubmitCredentials(e) {
		e.preventDefault();
		const credentials = {
			name: this.state.name,
			password: this.state.password
		};

		axios.post('http://localhost:5000/login/', credentials).then(res => console.log(res.data));
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmitCredentials}>
					<label> Name </label>
					<input type="text" value={this.state.name} onChange={this.handleName}/>
					<br></br>
					<label> Password </label>
					<input type="password" value={this.state.password} onChange={this.handlePassword}/>
					<br></br>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	};

}

