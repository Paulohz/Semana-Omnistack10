const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);
mongoose.connect('mongodb+srv://Paulo:WatchCtos@cluster0-1ubpa.mongodb.net/React?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}, err => (err ? console.log(err) : console.log("Connection to DB OK"))
);
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

