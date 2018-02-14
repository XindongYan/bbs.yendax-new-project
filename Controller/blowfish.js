var crypto = require('crypto')

var cipher = crypto.createCipher('blowfish', password)
cipher.update(new Buffer(4), 'binary', 'hex')
blow_password = cipher.final('hex')

module.exports = cipher