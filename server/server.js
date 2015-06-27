var express = require('express');
var server = express();
var mongoose = require('mongoose');
var router = require('./router');
server.use('/api', router);

mongoose.connect('mogodb://localhost:27017/meanBlogDev')

module.exports = server;
