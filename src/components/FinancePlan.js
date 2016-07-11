var React = require('react');
var Link = require('react-router').Link;
var hashHistory = require("react-router").hashHistory
var FinanceManager = require('./common/FinanceManager')

var FinancePlan = React.createClass({

	getInitialState: function () {
		return{
			incomes: [{
				id: 0,
				type: "Job",
				amount: 800
			},
			{
				id: 1,
				type: "Alowence",
				amount: 1500
			},
			{
				id: 2,
				type: "Investment",
				amount: 50
			}],
			expenses: [{
				id: 0,
				type: "House Payment",
				amount: 550
			},
			{
				id: 1,
				type: "Phone Bills",
				amount: 100
			},
			{
				id: 2,
				type: "Groceries",
				amount: 75
			}],
		}
	},

	render: function () {
		return (
			<div>
				<FinanceManager
					title= "Income"
					incomes= {this.state.incomes}
				/>
				<FinanceManager
					title= "expenses"
					expenses= {this.state.expenses}
				/>
			</div>
		)
	}
})

module.exports = FinancePlan;