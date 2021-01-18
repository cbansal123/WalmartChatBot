const path = require('path'),
  express = require('express'),
  app = express(),
  server = require('http').Server(app),
  io = require('socket.io')(server),
  bodyParser = require('body-parser'),
  { serverPort: PORT, serverIP: IP } = require('./config.json'),
  logger = require('./logging.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/', (req, res) => {
  const { clientId, message, chatRoom } = req.body;
  const msg = {
    clientId,
    message,
    chatRoom,
    timestamp: new Date()
  }
  io.emit(chatRoom, msg);
  logger.debug(msg);
  res.send('Success');
})

server.listen(PORT, IP, () => {
  logger.debug(`Listening on ${PORT}`);
})
