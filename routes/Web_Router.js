var signController = require('../Controller/sign')
var auth = require('../Controller/auth')
var m_topic = require('../model/m_sign')
var multer = require('multer')
var Disk = require('../Controller/DiskStorage')
var upload = multer({ dest: Disk })

var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/signup', (req, res, next) => {
  res.render('sign/signup')
})

router.post('/signup',signController.signup)

router.get('/signin', (req, res) => {
  res.render('sign/signin')
})

router.post('/signin', signController.signin)

router.get('/content', (req, res, next) => {
  m_topic.Topic.find({}, (err, result) => {
    if(err) return res.render('content', { error: '发生错误' })
    return res.render('content', { topic: result })
  }).sort({inserTime:-1})
})

router.get('/topic/create', auth.requrieLogin, (req, res, next) => {
  res.render('topic/create')
})

router.get('/username', signController.username)

router.get('/signout', (req, res, next) => {
  req.session.result = null
  res.redirect('/')
})

router.get('/:tid', signController.detial)

router.get('/delete/:yid', signController.delete)

router.post('/serch', signController.serch)

router.post('/reply', signController.reply)

router.post('/topic/create',  signController.create)

router.post('/genhuan', Disk.single('img-file'), (req, res, next) => {
  res.render('username')
})


module.exports = router;
