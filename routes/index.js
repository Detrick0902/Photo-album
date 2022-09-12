var express = require('express');
var router = express.Router();

var multer = require('multer')
let Usermodel  = require ('./users')

var  storageOptions = multer.diskStorage({
  destination : function (req,file,cb) {
    cb(null,'public/images/uploads')  
  },
  filename: function (req,file, cb) {
    cb(null, file.originalname /* + '-' + Date.now() */)
  }
})
var upload = multer({ storage : storageOptions})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET galery page. */
router.get('/gallery', function(req, res, next) {
  res.render('gallery');
});
router.post('/submit', upload.single('avatar'),function(req,res, next){
Usermodel.create({
  name: req.body.name,
  avatar : req.file.filename
})
.then(function(data){
 res.render('gallery',{data})
})
})
module.exports = router;
