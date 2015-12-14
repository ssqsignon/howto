
var express = require('express'),
    serveStatic = require('serve-static'),
    path = require('path'),
    port = 9901,
    app = express();

app.use('/app.js', serveStatic(path.join(__dirname, 'app.js')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port);
console.log([ 'web app listening on port', port.toString() ].join(' '));