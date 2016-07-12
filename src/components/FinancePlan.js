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
			totals: {
				total: 0,
				diff: 0,
				netIncome: 0,
			}
		}
	},
	saveTodoState: function (id,type, event) {
		console.log(id)
		var field = event.target.name;
		var value = event.target.value;
		var type = type;
		if (field == "incomes") {
			var newText = this.state.incomes;
			newText[id][type] = value;
			this.setState({
				incomes: newText
			})
			this.update()
		} else {
			var newText = this.state.expenses;
			newText[id][type] = value;
			console.log(newText)
			this.setState({
				expenses: newText
			})
			this.update()
		}

		

		
	},
	update: function () {
		var sum = 0;
		var expense = 0;
		for (var i = 0; i <= this.state.incomes.length -1; i++) {
			sum += Number(this.state.incomes[i].amount)
		}
		for (var i = 0; i <= this.state.expenses.length -1; i++) {
			expense += Number(this.state.expenses[i].amount)
		}
		this.setState({
				totals: {
				total:	sum,
				diff: expense,
				netIncome: sum - expense
			}
		})
	},
	componentWillMount: function () {
		this.update()
	},
	render: function () {
		console.log(this.state.expenses)
		var total = this.state.totals.total
		var difference = this.state.totals.diff
		return (
			<div>
				<FinanceManager
					name= "incomes"
					title= "Income"
					incomes= {this.state.incomes}
					total= {total}
					saveTodoState = {this.saveTodoState}
				/>
				<FinanceManager
					name= "expenses"
					title= "expenses"
					expenses= {this.state.expenses}
					total= {difference}
					saveTodoState = {this.saveTodoState}
				/>
				<div> {this.state.totals.netIncome} </div>
			</div>
		)
	}
})

module.exports = FinancePlan;