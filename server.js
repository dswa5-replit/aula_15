var http = require('http');
var app = require('./config/express')();
require('./config/passport')();
const url = 'mongodb+srv://???';
require('./config/database.js')(url);
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});
