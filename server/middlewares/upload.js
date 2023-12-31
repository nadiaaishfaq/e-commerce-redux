const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, "uploads/")
    },
    filename : function(req, file, cb){
        let ext = path.extname(file.originalname)
        let fileName = Date.now() + ext;
        console.log("Generated File Name", fileName)
        cb(null, fileName)
    }
})

const upload = multer({
    storage : storage,
    fileFilter : function(req, res, callback){
        if(file.mimetype=="image/png" || file.mimetype=="image/jpg"){
            callback(null, true)
        } else {
            console.log("only jpg/png supported")
            callback(null, false)
        }
    },
    limits : {
        fileSize: 1024 * 1024 * 2,
    }
})

module.exports = upload