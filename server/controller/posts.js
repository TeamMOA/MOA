import db from '../middleware/db'
import httpStatus from 'http-status-codes'
import modules from './modules.js'

// 게시글 조회
async function getPosts (req, res) {
    const pageSize = req.query.pageSize?parseInt(req.query.pageSize):20;
    try {
        let result = await db.query('SELECT pid, content, userCount, posttime, p.region, p.univ, p.interest, img, u.uid, u.profileImg FROM posts p JOIN users u ON p.uid=u.uid ORDER BY posttime DESC LIMIT ?;', [pageSize]);
        let posts = [];
        if(result.length > 0){
            result.map((val) => {
                posts.push({
                    pid : val.pid,
                    uid : val.uid,
                    nickname : val.nickname,
                    content : val.content,
                    userCount: val.userCount,
                    posttime: modules.timestamp(val.posttime),
                    region : val.region,
                    univ : val.univ,
                    interest : val.interest,
                    img: val.img,
                    link : val.link,
                    profileImg : val.profileImg,
                });
            });
            const returnObj = {
                success : true,
                posts : posts
            }
            res.status(httpStatus.OK).send(returnObj)
        } else{
            res.status(httpStatus.NOT_FOUND).send()
        }
   } catch(error) {
        console.error(error, "posts api error")
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send([])
   }
}

async function getPostId (req, res) {
    const pid = req.params.pid;
    
    await db.query('SELECT * FROM posts WHERE pid = ?;', [pid])
        .then((result)=>{
            let posts=[];
            if(result.length > 0){
                result.map((val) => {
                    posts.push({
                        pid : val.pid,
                        uid : val.uid,
                        nickname : val.nickname,
                        content : val.content,
                        userCount: val.userCount,
                        posttime: modules.timestamp(val.posttime),
                        region : val.region,
                        univ : val.univ,
                        interest : val.interest,
                        img: val.img,
                        link : val.link,
                    });
                });
                const returnObj = {
                    success : true,
                    posts : posts
                }
                res.status(httpStatus.OK).send(returnObj)
            } else{
                res.status(httpStatus.NOT_FOUND).send()
            }
        }).catch((err)=>{
            console.error(err, "postID api error");
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
                success : false,
                msg : '서버에 문제가 있어요'
            });
        })
}

async function createPost (req, res) {
    const pageSize = req.query.pageSize?parseInt(req.query.pageSize):20;
    try {
        const uid = req.body.uid;
        const nickname = req.body.nickname;
        const content = req.body.content;
        const region = req.body.region;
        const univ = req.body.univ;
        const interest = req.body.interest;
        const img = "http://roothyo.com:5000/images/"+req.file.filename;
        const link = req.body.link;

        let post = await db.query('insert into posts set ?', {
            uid : uid,
            nickname : nickname,
            content :content,
            posttime : new Date(),
            region : region,
            univ : univ,
            interest : interest,
            img : img,
            link : link
        })

        if(post.errno > 0) {
            res.status(httpStatus.NOT_FOUND).send({
                success : false,
                message : "Failed to post"
            })
        }
        else {
            res.status(httpStatus.OK).send({
                success : true,
                message : "Create Post Successful"
            })
        }
   } catch(error) {
        console.error(error, "createPost api error")
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send([])
   }
}

async function deletePost (req, res) {
    const pid = req.params.pid;
    if (!pid){
        res.status(httpStatus.NOT_FOUND).send({
            success : false,
            message : "pid is missing"
        })
    }
    try {
        let remove = await db.query('delete from posts where pid=?', [pid])
        if(remove.errno > 0 || remove.affectedRows == 0) {
            res.status(httpStatus.NOT_FOUND).send({
                success : false,
                message : "Failed to remove post"
            })
        }
        else {
            res.status(httpStatus.OK).send({
                success : true,
                message : "Delete Post Successful"
            })
        }
   } catch(error) {
        console.error(error, "deletePost api error")
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send([])
   }
}

async function getPostFilter (req, res) {
    const pageSize = req.query.pageSize?parseInt(req.query.pageSize):20;
    const region = req.body.region;
    const univ = req.body.univ;
    const interest = req.body.interest;
    let msg = [];
    if (region){
        msg.push(`p.region REGEXP '${region}'`);
    }
    if (univ) {
        msg.push(`p.univ REGEXP '${univ}'`);
    }
    if (interest) {
        msg.push(`p.interest REGEXP '${interest}'`);
    }
    let wheremsg = `WHERE ${msg.join(" AND ")}`;
    console.log(wheremsg);
    try {
        let result = await db.query(`SELECT pid, content, userCount, posttime, p.region, p.univ, p.interest, img, u.uid, u.profileImg FROM posts p JOIN users u ON p.uid=u.uid ${region||univ||interest?wheremsg:null} ORDER BY posttime DESC LIMIT ?;`, [pageSize]);
        let posts = [];
        if(result.length > 0){
            result.map((val) => {
                posts.push({
                    pid : val.pid,
                    uid : val.uid,
                    nickname : val.nickname,
                    content : val.content,
                    userCount: val.userCount,
                    posttime: modules.timestamp(val.posttime),
                    region : val.region,
                    univ : val.univ,
                    interest : val.interest,
                    img: val.img,
                    link : val.link,
                    profileImg : val.profileImg,
                });
            });
            const returnObj = {
                success : true,
                posts : posts
            }
            res.status(httpStatus.OK).send(returnObj)
        } else{
            res.status(httpStatus.NOT_FOUND).send()
        }
   } catch(error) {
        console.error(error, "posts api error")
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send([])
   }
}

export default {
    getPosts,
    getPostId,
    createPost,
    getPostFilter,
    deletePost,
}