
var express = require('express'),
    serveStatic = require('serve-static'),
    path = require('path'),
    port = 9901,
    passport = require('passport'),
    SsqSignonStrategy = require('passport-ssqsignon').Strategy,
    app = express();

passport.use(new SsqSignonStrategy('howtossqsignon'));

app.get('/items',  function (req, res) {
    res.sendFile(path.join(__dirname, 'items.json'));
});

app.use('/app.js', serveStatic(path.join(__dirname, 'app.js')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port);
console.log([ 'web app listening on port', port.toString() ].join(' '));