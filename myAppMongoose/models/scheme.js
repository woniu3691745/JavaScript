var mongoose = require('./mongoose')

Schema = mongoose.Schema;

// 对于Mongoose，一切都源自一个Schema
var UserSchema = new Schema({
  username: {
    type: String
  }, // 用户账号
  password: {
    type: String
  }, // 密码
  age: {
    type: Number
  }, // 年龄
  createdate: {
    type: Date, default: Date.now
  }, // 最近登录时间
  role: {
    type: String
  }
});

const models = {
  'Users': mongoose.model('users', UserSchema)
}

module.exports = models;