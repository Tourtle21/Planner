'use strict';

var Dispatcher = require("../dispatcher/Dispatcher")
var API = require("../helpers/api")

var UserActionCreator = {

	createUser: function (email, password) {
		var newUserPromise = API.createUser(email, password)

		newUserPromise
			.then(function (newTodo) {
				// Nothing
			})
	}
}

module.exports = UserActionCreator
