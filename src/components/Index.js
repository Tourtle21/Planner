var React = require('react');
var TextInput = require('./common/TextInput')

var Index = React.createClass({
	getInitialState: function () {
		return {
			errors: {},
			text: {
				email: '',
				password: ''
			}
		}
	},
	saveTodoState: function (event) {
		var field = event.target.name;
		var value = event.target.value;
		var newText = Object.assign({}, this.state.todo);

		newTodo[field] = value;

		this.setState({
			text: newText
		})
	},
	render: function () {
		return (
			<div>
				<TextInput 
					name="email"
					placeholder="EMAIL"
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
				<button>Sign Up</button>
				<br />
				<button>&#10004;</button>
			</div>
		)
	}
})

module.exports = Index;