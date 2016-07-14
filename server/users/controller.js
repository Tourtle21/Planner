var User = require('./model');

module.exports = {
	create: createUser
};

function createUser(req, res)
{
	console.log('we are here')
	var name = req.body.name
	var email = req.body.email
	var password = req.body.password

	User.create(
	{
		name: name,
		email: email,
		password: password
	},
	function(err, user)
	{
		if (err) return reportError(err, res)

		res.status(201).json(user)
	})
}

function reportError(err, res)
{
	res.status(500).json
			({
				error: err.toString()
			})	
}