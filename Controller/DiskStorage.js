var multer = require('multer')

var storage = multer.diskStorage({
    destination: function(req, file, cd)  {
        cd(null, 'avatar')
    },
    filename: function(req, file, cd) {
        cd(null, 'hello' + '.png')
    }
})

var avatar = multer({
    storage: storage
})

module.exports = avatar