let express = require('express');
let app = express();
let httpServer = require('http').createServer(app);
let router = require('./router');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let db = require('./db');

app.set("PORT", process.env.PORT || 8000);
app.set('views', './views');
app.set('view engine', 'ejs');

db.connect();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', router);


httpServer.listen(app.get("PORT"), ()=>{
    console.log("Server listen on port: " + app.get("PORT") + ".");
});
