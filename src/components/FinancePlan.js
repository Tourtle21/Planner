var React = require('react');
var Link = require('react-router').Link;
var hashHistory = require("react-router").hashHistory
var FinanceManager = require('./common/FinanceManager')
var ItemStore = require('../stores/itemStore')
var ItemActionCreator = require('../actions/ItemActionCreator')
var FinancePlan = React.createClass({

	getInitialState: function () {
		return{
			incomes: [],
			expenses: [],
			totals: {
				total: 0,
				diff: 0,
				netIncome: 0,
			}
		}
	},
	saveTodoState: function (id,type, event) {
		var field = event.target.name;
		var value = event.target.value;
		var type = type;
		if (field == "incomes") {
			var newText = this.state.incomes;
			newText[id][type] = value;
			ItemActionCreator.updateItem(newText[id], "income")
			this.update()
		} else {
			var newText = this.state.expenses;
			newText[id][type] = value;
			ItemActionCreator.updateItem(newText[id], "expense")
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
				netIncome: sum - expense,
				incomes: ItemStore.getAllIncomes(),
				expenses: ItemStore.getAllExpenses()
			}
		})
	},
	componentWillMount: function () {
		this.setState({
			incomes: ItemStore.getAllIncomes(),
			expenses: ItemStore.getAllExpenses()
		})
		this.update()
	},
	render: function () {
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