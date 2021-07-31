import posts from '../controller/posts.js'
var express = require('express');
var router = express.Router();
var multer = require('multer') // 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
      }
})
// var upload = multer({ dest: 'uploadedFiles/' }); // 3-1
var upload = multer({ storage: storage }); // 3-2

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

/* GET users listing. */
router.get('/', posts.getPosts);
router.get('/:pid', posts.getPostId);
router.post('/', upload.single('images'), posts.createPost);
router.post('/filter', posts.getPostFilter);
// router.put('/:pid', upload.single('images'), post.updatePost);
router.delete('/:pid', posts.deletePost);

module.exports = router;