var express = require('express');
var router = require('express').Router();
var controller = require('./controller');

router.post('/', controller.create)

module.exports = router