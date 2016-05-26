"use strict";

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: String,
    pass: String
});

var user = mongoose.model('User', userSchema);