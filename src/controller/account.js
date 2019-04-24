import {Router} from 'express'
import Account from '../models/account'
import passport from 'passport';


import {generateAccessToken, respond, authenticate} from '../middleware/authMiddleware';

export default ({ config, db }) => {
    let api = Router();

    api.get('/', authenticate, (req,res) => {
        res.status(200).send({username: req.body.username})
    })

    // register route

    api.post('/register', (req, res) => {

        // check if user with that email exits
        Account.findOne({email: req.body.email}, function(err, user) {
            if(user) return res.status(400).send({msg: 'There is an account with this email'});
            if(err) return res.status(500).send({msg: 'Something went wrong 1'})
        
            let acc = new Account(req.body);
            console.log(acc)
            acc.save((error) => {
                if(error){
                    return res.status(500).send({msg: 'Something went wrong'})
                }
                return res.status(200).send({msg: 'Account was succesfully Created'})
            })
        })
    })

    // login route
    api.post('/login', (req,res) => {
        Account.findOne({email: req.body.email}, function(err, user) {
        if(!user) return res.status(400).send({msg: "Username doesnt exits"})
        
        passport.authenticate(
            'local', {
                session: true,
                scope: []
            })
            generateAccessToken(user)
            respond(user, res)
        })
    });
    

    return api;
}