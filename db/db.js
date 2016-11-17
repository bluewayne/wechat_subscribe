/**
 * Created by liujinhe on 16/11/14.
 */

var mongoose = require('mongoose');

var config = require('./config');
mongoose.connect(config.database);
mongoose.connection.on('error', function () {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});
