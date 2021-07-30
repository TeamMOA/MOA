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

export default {
    normal,
    detail
}