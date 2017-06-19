var mongoose = require('mongoose');

var config = {
  URI: 'mongodb://ds121222.mlab.com:21222/lidongliang',
  OPTIONS: {
    user: 'admin',
    pass: 'a',
    auth: {
      authdb: 'lidongliang'
    }
  }
}

/**
 * 连接
 */
mongoose.Promise = global.Promise;
mongoose.connect(config.URI, config.OPTIONS);

/**
 * 连接成功
 */
mongoose.connection.on('connected', function() {
    console.log('Mongoose connection open to successful !');
});

/**
 * 连接异常
 */
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose connection disconnected');
});

/**
 * 打开一次
 */
mongoose.connection.once('open', function (params) {
  console.log('Mongoess is open')
})


module.exports = mongoose;