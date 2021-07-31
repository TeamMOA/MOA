import db from '../middleware/db'
import httpStatus from 'http-status-codes'
import security from '../middleware/security'

// 로그인
async function login(req, res) {
    console.log(req.body);
    try {
        const userEmail = req.body.email
        const userPw = req.body.userPw
        
        const selectKey = await db.query("select userKey from users where email = ?", [userEmail]);
        const secret = await security.pbkdf2(userPw, selectKey[0].userKey)

        const pw = secret.pw

        let userInfo = await db.query('select uid, userID, email, nickname from users where email = ? AND password = ?', [userEmail, pw])

        if(userInfo.length > 0){
            userInfo = userInfo[0]
            const returnObj = {
                success : true,
                msg:'로그인에 성공해따...',
                uid : userInfo.uid,
                userId : userInfo.userID,
                userEmail : userInfo.email,
                nickname : userInfo.nickname,
            }
            res.status(httpStatus.OK).send(returnObj)
        } else{
            res.status(httpStatus.NOT_FOUND).send({
                success : false,
                message : "Failed to login"
            })
        }
   } catch(error) {
        console.error(error, "login api error")
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send([])
   }
}

// 회원가입
async function signUp(req, res) {
    try {
        const userEmail = req.body.email;
        
        const isValid = await db.query('select uid from users where email = ?', [userEmail]);
        console.log(isValid);
        if (isValid.length > 0){
            res.status(httpStatus.NOT_FOUND).send({
                success : false,
                message : "Existed Email"
            })
        } else {
            const userPw = req.body.userPw;
            const userID = req.body.userID;
            const nickname = req.body.nickname;
            const secret = await security.security(userPw);

            let signUp = await db.query('insert into users set ?', {
                email : userEmail,
                userID : userID,
                password : secret.pw,
                userKey : secret.pwKey,
                nickname : nickname,
            })
            if(signUp.errno > 0) {
                res.status(httpStatus.NOT_FOUND).send({
                    success : false,
                    message : "Failed to sign up"
                })
            }
            else {
                res.status(httpStatus.OK).send({
                    success : true,
                    message : "Register user information successfully"
                })
            }
        }
    } catch (error) {
        console.error(error, "signUp api error")
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send([])
    }
}

async function checkDuplicate(req, res) {
    try {
        const userID = req.body.userID
        
        let isDuplicated = await db.query('select uid from users where userID = ?', [userID]);

        if(isDuplicated.length > 0){
            res.status(httpStatus.NOT_FOUND).send({
                success : false,
                msg : 'Exited userID'
            });
        } else{
            res.status(httpStatus.NOT_FOUND).send({
                success : true,
                message : "아이디를 사용하실 수 있습니다."
            })
        }
   } catch(error) {
        console.error(error, "checkDupilcate api error")
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send([])
   }
}

export default {
    login,
    signUp,
    checkDuplicate,
}