var mongoose = require('../moogodb')

var User = new mongoose.Schema({
    inserTime: Date,
    username: String,
    password: String,
    re_password: String,
    Email: String,
    avatar: String
});

var Topic = new mongoose.Schema({
    inserTime: Date,
    username: String,
    title: String,
    textarea: String
})

var Comment = new mongoose.Schema({
    inserTime: Date,
    username: String,
    topicId: String,
    content: String
})

exports.User = mongoose.model('users',User)
exports.Topic = mongoose.model('topics',Topic)
exports.Comment = mongoose.model('comments',Comment)