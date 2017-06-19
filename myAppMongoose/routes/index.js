var express = require('express');
var router = express.Router();
let { Users } = require('../models/scheme')

/**
 * home page.
 */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Express", select: "\getUserList" })
});

/**
 * add page
 */
router.get('/add', function (req, res, next) {
  res.render('add', { title: "add user page." })
});

/**
 * add submit page.
 */
router.get('/addUser', function (req, res, next) {
  let user = new Users({
    username: 'lidongliang',
    password: 'a',
    age: 27,
    role: 'admin'
  })
  user.save(function (err, data) {
    if (err) {
      res.render('index', { title: err })
    } else {
      res.render('index', { title: '' });
    }
  })
})

/**
 * select page.
 */
router.get('/getUserList', function (req, res, next) {
  Users.find(function (err, data) {
    if (err) {
      res.render('list', { title: "list", list: err })
    } else {
      console.log(Array.from(data));
      res.render('list', { title: "userList", list: data });
    }
  })
})

module.exports = router;
