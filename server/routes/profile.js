var express = require('express');
import profile from '../controller/profile'
const router = express.Router();

var multer = require('multer') // 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname.replaceAll(' ', '_'));
      }
})
// var upload = multer({ dest: 'uploadedFiles/' }); // 3-1
var upload = multer({ storage: storage }); // 3-2

// 프로필 일반
router.get('/:uid', profile.normal);

// 프로필 상세
router.get('/detail/:uid', profile.detail);

router.put('/:uid', upload.single('images'), profile.update);


export default router