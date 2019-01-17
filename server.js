// server.js

// init project
const express = require('express');
const urlModule = require('url');
const app = express();
const Discogs = require('disconnect').Client;
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

const dis = new Discogs({ consumerKey: process.env.DISCOGS_CONSUMER_KEY,
                          consumerSecret: process.env.DISCOGS_CONSUMER_SECRET });
const db = dis.database();

const getDiscogsData = async (params) => {
  try {
    return await db.search("", params);
  } catch(err) {
    throw err;
  }
}

const getDiscogsDataFromUrl = async (urlString) => {
  try {
    const url = new URL(urlString);
    const search = url.search;
    const path = url.pathname;
    return await dis.get(path + search);
  } catch(err) {
    throw err;
  }
}

app.get("*", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

var listener = server.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

io.on('connection', socket => {
  console.log('user connected');
  
  socket.on('search', async (params) => {
    const data = await getDiscogsData(params)
    socket.emit('discogs response', data);
  });
  
  socket.on('page request', async (url) => {
    const data = await getDiscogsDataFromUrl(url);
    socket.emit('discogs response', data);
  });
});
