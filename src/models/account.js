import mongoose from 'mongoose';

let account = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength:5,
        maxlength: 50
    }
    
})

module.exports = mongoose.model('Account', account)