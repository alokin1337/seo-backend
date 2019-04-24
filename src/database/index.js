import mongoose from 'mongoose';

let options = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    reconnectTries: 1000
}

export default callback => {
    let db = mongoose.connect('mongodb://localhost:27017/skalilo-api', options ).then(()=>{console.log('db connected successfuly'), (err) => {console.log(err)}});
    callback();
}