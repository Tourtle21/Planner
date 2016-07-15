'use strict';

var Dispatcher = require('../dispatcher/Dispatcher')
var EventEmitter = require('events');
var _ = require('lodash');
var _id = ""
var _users = []
var UserStore = Object.assign({}, EventEmitter.prototype, {
	// addChangeListener: function (callback) {
	// 	this.on(CHANGE_EVENT, callback);
	// },

	// removeChangeListener: function (callback) {
	// 	this.removeListener(CHANGE_EVENT, callback);
	// },

	// emitChange: function () {
	// 	this.emit(CHANGE_EVENT);
	// },


})

Dispatcher.register(function (action, type) {
	switch (action.actionType) {
		case "getUsers":
    _users.push(action.data)
    break;
    case "setId":
    _id = action.data._id
    break;
	}
})

module.exports = UserStore;
