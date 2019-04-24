import expressJwt from 'express-jwt'
import jwt from 'jsonwebtoken';


// move to env vars
const loginTokenTime = 60 * 60 * 24 * 30; // 30 days

// move to env vars
const SECRET = "Node secRet Is This";

let authenticate = expressJwt({ secret: SECRET });

let generateAccessToken = (req) => {
    req.token = req.token || {};
    req.token = jwt.sign({
        id: req._id,
    }, SECRET, {
            expiresIn: loginTokenTime
        });
}

let respond = (req, res) => {
    res.status(200).json({
        user: req.username,
        token: req.token
    });
}

module.exports = {
    authenticate,
    generateAccessToken,
    respond
};
