'use strict';

var mongoose = require('mongoose');

var MoneySchema = new mongoose.Schema({
	//user: {type: mongoose.Schema.Types.ObjectId, required: true, ref:'User'},
	title: {type: String, required: true},
	amount: {type: Number, required: true},
	updatedAt: Date
});

MoneySchema.pre('save', function (done){
	this.updatedAt = new Date;
	done();
});
module.exports = mongoose.model('Money', MoneySchema);