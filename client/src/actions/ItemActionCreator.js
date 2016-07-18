'use strict';

var Dispatcher = require("../dispatcher/Dispatcher");
var API = require("../helpers/api");
var ItemStore = require("../stores/itemStore");
var UserStore = require("../stores/userStore");

var ItemActionCreator = {

	createItem: function (type) {
		var newItemPromise = API.createMoney(type, UserStore.getId())
		newItemPromise
			.then(function (){
				Dispatcher.dispatch({
					actionType: "create",
					type: type
				})
			})
	},
	updateItem: function (item, type) {
		if (!type) {
			API.updateMoney(item);
		} else {
			Dispatcher.dispatch({
				actionType: "update",
				item: item,
				type: type
			})
		}
	},
	setGoal: function (goal, months, net) {
		Dispatcher.dispatch({
			actionType: "goal",
			goal: goal,
			months: months,
			net: net
		})
	},
	deleteItem: function (number, id, name) {
		Dispatcher.dispatch({
			actionType: "delete",
			number: number,
			id: id
		})
	},
	initialize: function (_id) {
		var newItemPromise = API.getAllMoney(_id)
		newItemPromise
			.then(function (item){
				Dispatcher.dispatch({
					actionType: "initial",
					item: item
				})
			})
	}
}

module.exports = ItemActionCreator
