// Generated by CoffeeScript 1.7.1
var app, cors, mongoose;

cors = require('cors');

app = require('express')();

app.use(cors({
  origin: true,
  credentials: true
}));

mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/typeset', function() {
  var io, server;
  console.log('MongoDB Connected!');
  server = app.listen(8888, function() {
    return console.log('Listening on port ' + 8888);
  });
  io = require('socket.io')(server);
  return io.on('connection', function(socket) {
    console.log('New Socket Connected!');
    require('./lib/doc')(socket, mongoose);
    return socket.on('disconnect', function(socket) {
      return console.log('Socket Disconnected!');
    });
  });
});

//# sourceMappingURL=index.map
