'use strict';

var Dispatcher = require("../dispatcher/Dispatcher")

var ItemActionCreator = {
	createItem: function (type) {
		Dispatcher.dispatch({
			actionType: "create",
			type: type
		})
	},
	updateItem: function (item, type) {
		Dispatcher.dispatch({
			actionType: "update",
			item: item,
			type: type
		})
	},
	setGoal: function (goal, months, net) {
		Dispatcher.dispatch({
			actionType: "goal",
			goal: goal,
			months: months,
			net: net
		})
	},
	deleteItem: function (number, id) {
		Dispatcher.dispatch({
			actionType: "delete",
			number: number,
			id: id
		})
	}	
}

module.exports = ItemActionCreator