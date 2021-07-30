var express = require('express');
import profile from '../controller/profile'
const router = express.Router();

// 프로필 일반
router.get('/:uid', profile.normal);

// 프로필 상세
router.get('/detail/:uid', profile.detail);


export default router