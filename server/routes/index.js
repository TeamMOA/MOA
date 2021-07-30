var express = require('express');
var router = express.Router();

import users from './users.js';
import profile from './profile.js';
import posts from './posts.js';
import clusterRouter from './clusters.js';

router.use('/user', users);
router.use('/profile', profile);
router.use('/post', posts);
router.use('/cluster', clusterRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
