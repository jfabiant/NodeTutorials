
/*Example #1 with console*/
//console.log("Hello world by jfabiant")

/*
Example #2
var http = require('http');
http.createServer(function(req, res) {

    //Send the HTTP Header
    //HTTP Status: 200: OK
    res.end("Hola mundo de - Jfabiant");

}).listen(9000);

console.log('Server running in port 9000');
*/

/*Example #3*/

/*
const express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'))
app.get('/', function(request, response){
    response.send("Hola express - jfabiant - I love nodemon");
});

app.listen(process.env.PORT || 9000);
*/

/*Example #4*/

const express = require ('express')
const app = express()
const routes = require('./routes/routes')
const bodyParser = require('body-parser')
const port = process.env.PORT || 9000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', routes)
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.listen(port, () =>{
    console.log('Server running in port http://localhost:'+port)
});









