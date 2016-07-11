var React = require('react');
var TextInput = require('./common/TextInput')
var Link = require('react-router').Link;
var hashHistory = require("react-router").hashHistory

var SignUp = React.createClass({
	getInitialState: function () {
		return {
			errors: {},
			text: {
				fname: '',
				lname: '',
				email: '',
				password: ''
			}
		}
	},
	saveTodoState: function (event) {
		var field = event.target.name;
		var value = event.target.value;
		var newText = Object.assign({}, this.state.todo);

		newText[field] = value;

		this.setState({
			text: newText
		})
	},
	link: function () {
		hashHistory.push("/signup")
	},
	showEnd: function () {
		hashHistory.push("/FinancePlan");
	},
	render: function () {
		return (
			<div>
				<TextInput 
					name="fname"
					placeholder="First Name"
					value={this.state.text.fname}
					saveTodoState={this.saveTodoState}
					error={this.state.errors.fname}
				/>
				<TextInput 
					name="lname"
					placeholder="Last Name"
					value={this.state.text.lname}
					saveTodoState={this.saveTodoState}
					error={this.state.errors.lname}
				/>
				<TextInput 
					name="email"
					placeholder="Email"
					value={this.state.text.email}
					saveTodoState={this.saveTodoState}
					error={this.state.errors.email}
				/>
				<TextInput 
					name="password"
					placeholder="Password"
					value={this.state.text.password}
					saveTodoState={this.saveTodoState}
					error={this.state.errors.password}
				/>
				<hr />
				<button onClick={this.showEnd}>&#10004;</button>
			</div>
		)
	}
})

module.exports = SignUp;