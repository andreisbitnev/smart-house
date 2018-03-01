var express = require('express');
var express = require('express');
var router = express.Router();
var Test = require('../models/test');

router.get('/', function(req, res, next) {
  Test.find()
        .exec(function (err, textArr) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: textArr
            });
        });
});

router.post('/', function(req, res, next) {
  var text = req.body.text;
  var test = new Test({text})
  test.save();
  res.status(200).json({
    message: 'Success',
  });
});

module.exports = router;