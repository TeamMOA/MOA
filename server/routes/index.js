var express = require('express');
var router = express.Router();

import users from './users.js';
import newsRouter from './news.js';
import clusterRouter from './clusters.js';

router.use('/user', users);
router.use('/news', newsRouter);
router.use('/cluster', clusterRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
