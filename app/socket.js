const openSocket = require('socket.io-client');
const socket = openSocket();

const socketListenForData = (cb) => {
  socket.on('discogs response', cb);
  console.log('listen for data')
}

const socketSearch = (data) => {
  socket.emit('search', data);
  console.log('send search query')
}

const socketRequestPage = (url) => {
  socket.emit('page request', url);
  console.log('request page');
}
export { socketListenForData, socketSearch, socketRequestPage };