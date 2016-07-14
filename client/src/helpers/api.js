'use strict';

var ajax = require('./ajax');

module.exports = {
	getAllMoney: getAllMoney,
	createMoney: createMoney,
	deleteMoney: deleteMoney,
	updateMoney: updateMoney
}

function getAllMoney () {
	var url = '/moneys';
	var data = {};
	var type = 'GET';

	return ajax(url, data, type);
}

function createMoney (money) {
	console.log('need to post');
	var url = '/money';

	return ajax(url);
}

function deleteMoney (money) {
	var url = '/money/' + money._id;
	var data = {};
	var type = 'DELETE';

	return ajax(url, data, type);
}

function updateMoney (money) {
	var url = '/money/' + money._id;
	var data = money;
	var type = 'PUT';

	return ajax(url, data, type);
}