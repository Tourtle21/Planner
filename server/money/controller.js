'use strict';

var Money = require('./model');

module.exports = {
	create: createMoney,
	index: indexMoney,
	show: showMoney,
	update: updateMoney,
	delete: deleteMoney,
};

function createMoney(req, res)
{
	console.log('creating money')
	Money.create({
		//user: req.body.user,
		title: '',
		amount: 0
	},
	function (err, item)
	{
		if (err) return reportError(err, res);
		res.status(201).json(item);
	});
}

function deleteMoney(req, res)
{
	findMoney(req, res, function (item) 
	{
		item.remove(function (err)
		{
			if(err) return reportError(err, res)
			res.status(204).end()
		})
		
	});
}

function indexMoney(req, res)
{
	Money.find(function (err, collection)
	{
		if (err) return reportError(err, res)

		res.json(collection)
	});
}

function showMoney(req, res)
{
	findMoney(req, res, function (item) 
	{
		res.json(item)
	});
}

function updateMoney(req, res)
{
 	findMoney(req, res, function(item)
 	{
 		item.user = req.body.user
 		item.title = req.body.title
		item.amount=req.body.amount

		item.save(function(err)
		{
			if(err) return reportError(err, res)

			res.json(item)
		})
 	});
}

function findMoney(req, res, success)
{
	var id = req.params.id
	Money.findById(id, function (err, item)
	{
		if (err)
		{
			reportError(err, res)
		}
		else if (!item)
		{
			res.status(404).json
			({
				error: "I could not find item with that id"
			})	
		}
		else
		{
			success(item)
		}
	});
}

function reportError(err, res)
{
	res.status(500).json
			({
				error: err.toString()
			})	
}
