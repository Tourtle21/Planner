var React = require('react');
var Link = require('react-router').Link;
var hashHistory = require("react-router").hashHistory

var FinancePlan = React.createClass({

	


	render: function () {
		var amount = 0;

		var createTodoRow = function (incomes) {
			amount += incomes.amount
			return (
				<tr key={incomes.id}>
					<td>{incomes.type}</td>
					<td>{incomes.amount}</td>
				</tr>
			);
		}
		if (this.props.title == "Income"){
			var output = this.props.incomes.map(createTodoRow, this)
		} else {
			var output = this.props.expenses.map(createTodoRow, this)
		}
		return (
			<div>
				<h1>{this.props.title}</h1>
				<table>
					<thead>
						<tr>
							<th>Type of {this.props.title}</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						{output}
					</tbody>
				</table>
			<div>
				{amount}
			</div>

					

			</div>
		)
	}
})

module.exports = FinancePlan;