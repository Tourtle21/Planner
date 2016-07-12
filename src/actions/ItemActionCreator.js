'use strict';

var Dispatcher = require("../dispatcher/Dispatcher")

var ItemActionCreator = {
	createItem: function (item, type) {
		Dispatcher.dispatch({
			actionType: "create",
			item: item,
			type: type
		})
	},
	updateItem: function (item) {
		Dispatcher.dispatch({
			actionType: "update",
			item: item
		})
	}
}

module.exports = ItemActionCreator