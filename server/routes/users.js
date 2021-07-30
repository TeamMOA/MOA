var express = require('express');
import user from '../controller/user'
const router = express.Router();

// 로그인
router.post('/login', user.login)


// 회원가입
router.post('/signUp', user.signUp)


// 아이디 중복 확인
router.post('/checkID', user.checkDuplicate)

export default router