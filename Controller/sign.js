var db = require('../model/m_sign')
var crypto = require('crypto')

function blow(psd) {
    var cipher = crypto.createCipher('blowfish', psd)
    cipher.update(new Buffer(4), 'binary', 'hex')   
    blow_password = cipher.final('hex')
    return blow_password
}

exports.signup = (req, res, next) => {
    let username = req.body.username;
    let email = req.body.Email;
    let password = req.body.password;
    let re_password = req.body.re_password;

    //!NULL
    if( !username || !email  || !password || !re_password) return res.render('sign/signup', { error: '请填写完整' })

    blowpassword = blow(password)

    let userData = {
        inserTime: new Date(),
        email: email,
        username: username,
        password: blowpassword,
        avatar: 'hello.png'
    };

    //signup
    db.User.findOne({username}, (err, result) => {
        if(result) return res.render('sign/signup', { error: '用户名被占用' })
        db.User.findOne({email}, (err, result) => {
            if(result) return res.render('sign/signup', { error: '邮箱已经被注册' })
                db.User.create(userData, (err, result) => {
                    if(err) return res.render('sign/signup', { error: '发生错误' })
                        else{ return res.redirect('/') }
                    })
                })
            })
        }

exports.signin = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    //!NULL
    if( !username || !password ) return res.render('sign/signin', { error: '不可能为空' })

    inpassword = blow(password)

    //find username
    db.User.findOne({username,inpassword}, (err, result) => {
        if(err) return res.render('sign/signin', { error: '登陆错误' })
        if(result) {req.session.result = result; return res.redirect('/')}
        else { return res.render('sign/signin', { error: '账户或者密码错误' }) }
    })
}

exports.create = (req, res) => {
    let title = req.body.title;
    let textarea = req.body.textarea;

    //!NULL
    if( !title || !textarea ) return res.render('topic/create', { error: '上传不能为空' })

    let content =  {
        inserTime: new Date(),
        username: req.session.result.username,
        title: title,
        textarea: textarea 
    };

    db.Topic.create(content, (err, result) => {
        return res.redirect('/content')
    })
}

exports.detial = (req, res, next) => {
    let topicId = req.params.tid;

    db.Topic.findById(topicId, (err, topic) => {
        db.Comment.find({topicId: topicId}, (err, comment) => {
            if(err) return res.render('topic_home', {error: '数据库发生错误'})
            return res.render('topic_home', {topic: topic,comment: comment})
        })
    })
}

//查看个人的发帖记录
exports.username = (req, res, next) => {
    let username = req.session.result.username;
    
    db.Topic.find({username: username}, (err, result) => {
        if(err) return res.render('username', {error: '提出了一个错误'})
        return res.render('username', {value: result})
    })
}

exports.delete = (req, res, next) => {
    let id = req.params.yid;

    console.log(id)

    db.Topic.remove({_id: id}, (err, result) => {
        if(err) return res.render('topic_home', {error: '服务器发生了错误'})
        return res.redirect('/content')
    })

}

exports.serch = (req, res, next) => {
    let value = req.body.value;

    db.Topic.find({title : value} , (err, result) => {
        if(err) return res.render('serch/serch', {error: '没有记录,或者发生了无可奉告的错误'})
        return res.render('serch/serch', {value: result})
    })
}

//用户发表评论
exports.reply = (req, res, next) => {
    let reply = req.body.reply;
    let topicId = req.body.topicId;

    let commentDate = {
        inserTime: new Date(),
        topicId: topicId,
        username: req.session.result.username,
        content: reply
    }

    //!NULL
    if(!reply) return res.render('topic_home', {error: '提交不能为空'})

    db.Comment.create(commentDate, (err, comment) => {
        if(err) return res.render('topic_home', {error: '服务器发生了错误'})
        return res.redirect(topicId)
    })


}