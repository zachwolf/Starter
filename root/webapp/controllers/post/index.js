/*jslint node: true */
"use strict";

/*
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    orderSchema = new Schema({
      creator : String,
      date    : { type: Date, default: Date.now },
      exampleVal: String
    }),
    Order = mongoose.model("Order", orderSchema);
*/

exports.list = function(req, res, next){
  return res.render('index');
};

/*
// app.get('/post/new');
exports.create = function(req, res, next){
};

// app.post('/post/new');
exports.save = function(req, res, next){
};

// app.get('/post/:id');
exports.show = function (req, res, next) {
};

// app.get('/post/:id/edit');
exports.edit = function (req, res, next) {
};

// app.put('/post/:id/update');
exports.update = function (req, res, next) {
};

// app.delete('/post/:id/delete');
exports.delete = function (req, res, next) {
};
*/