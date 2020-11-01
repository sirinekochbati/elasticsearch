const express = require('express');
const cors = require('cors');
const bodyParser= require('body-parser');
const config = require('config');
const port = process.env.PORT || config.application_serverport;
const app = express();
const path = require("path");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());

app.options('*',cors());
app.use(bodyParser.urlencoded({
    extended: true
}))
const server= require('http').createServer(app);
const searchRoutes= require('./routes/searchroutes');

app.use('/', searchRoutes);

app.use((req,res,next) => {
    req.socket.on('error', ()=>{ });
    next;   
});

server.on('listening', () => {
    console.log('server is turning');
});

server.listen(port, () => {
    console.log('server listening at port %d', port);
});

module.exports = app;