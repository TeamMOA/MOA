import db from '../middleware/db'
import httpStatus from 'http-status-codes'

// 프로필
async function normal(req, res) {
    try {

        const uid = req.params.uid;

        let userInfo = await db.query('select nickname, introduce, profileImg from users where uid = ?', [uid]);

        // let userPost = await db.query('select postID, content, imgPath from posts where userID = ? order by timestamp desc', [userId])
        const returnObj = {
            success : true,
            userInfo : userInfo
        }
        res.status(httpStatus.OK).send(returnObj);

    } catch (error) {
        console.error(error, "profile api error")
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            success:false,
            msg:'프로필 가져오는데 실패하셨군요 크크...크림빵...'
        })
    }
}

async function detail(req, res) {
    try {

        const uid = req.params.uid;

        let userInfo = await db.query('select * from users where uid = ?', [uid]);

        // let userPost = await db.query('select postID, content, imgPath from posts where userID = ? order by timestamp desc', [userId])
        const returnObj = {
            success : true,
            userInfo : userInfo
        }
        res.status(httpStatus.OK).send(returnObj);

    } catch (error) {
        console.error(error, "profile api error")
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            success:false,
            msg:'프로필 가져오는데 실패하셨군요 크크...크림빵...'
        })
    }
}

async function update(req, res) {
    try {
        console.log(req.body);
        const uid = req.params.uid;
        const nickname = req.body.nickname;
        const introduce = req.body.introduce;
        const region = req.body.region;
        const univ = req.body.univ;
        const interest = req.body.interest;
        const profileimg = "http://roothyo.com:5000/images/"+req.file.filename;
        
        let update = await db.query('UPDATE users set nickname=?, introduce=?, region=?, univ=?, interest=?, profileimg=? where uid = ?',[nickname, introduce, region, univ, interest, profileimg, uid]);

        if(update.errno > 0) {
            res.status(httpStatus.NOT_FOUND).send({
                success : false,
                message : "Failed to update"
            })
        }
        else {
            res.status(httpStatus.OK).send({
                success : true,
                message : "update Profile Successful"
            })
        }

    } catch (error) {
        console.error(error, "update profile api error")
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            success:false,
            msg:'프로필 가져오는데 실패하셨군요 크크...크림빵...'
        })
    }
}

export default {
    normal,
    detail,
    update
}