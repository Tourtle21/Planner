'use strict';

var Dispatcher = require('../dispatcher/Dispatcher')
var EventEmitter = require('events');
var _ = require('lodash');

var _items = [
			[{
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
			[{
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
			}]
]

var ItemStore = Object.assign({}, EventEmitter.prototype, {
	// addChangeListener: function (callback) {
	// 	this.on(CHANGE_EVENT, callback);
	// },

	// removeChangeListener: function (callback) {
	// 	this.removeListener(CHANGE_EVENT, callback);
	// },

	// emitChange: function () {
	// 	this.emit(CHANGE_EVENT);
	// },

	getAllIncomes: function () {
		return _items[0];
	},
	getAllExpenses: function () {
		return _items[1];
	}
})

Dispatcher.register(function (action, type) {
	switch (action.actionType) {
		case "create":
		if (type == "income") {
			_items[0].push(action.item);
		}	else {
			_items[1].push(action.item);
		}
		
		// ItemStore.emitChange();
		break;
		case "update":
		if (type == "income") {
			var index = 0;
		}
		else {
			var index = 1;
		}
		var existingItem = _.find(_items[index], {_id: action.item.id})
		var existingItemIndex = _.indexOf(_items[index], existingItem);
		_items[index].splice(existingItemIndex, 1, action.item)
		// ItemStore.emitChange();
		break;
		
	}
})

module.exports = ItemStore;