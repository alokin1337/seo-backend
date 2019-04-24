import express from 'express';
import http from 'http';
import config from './config'; 
import bodyParser from 'body-parser';
import routes from './routes'

let app = express();
app.server = http.createServer(app)

//init BodyParser with limit

app.use(bodyParser.json({
    limit: config.bodyLimit
}))


// api routes 
app.server.listen(config.port);

app.use('/', routes)

console.log(`App started on ${config.port}`)

export default app;