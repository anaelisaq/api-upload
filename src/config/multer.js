const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,"uploads/")
    }, //onde as imagens serão salvas
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname))
    } //configurar o nome do arquivo no servidor data + .jpg/.png
}) //config de como vai salvar as imagens

const upload = multer({ storage })

module.exports = upload