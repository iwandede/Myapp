var debug = require('debug')('Myapp');
var app = require('./app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Aplikasi Nodesjs Perama starting dengan alamat http://localhost:3000 ' + server.address().port);
});