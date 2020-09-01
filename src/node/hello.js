// var http = require('http');
// var port= 4000;
// http.createServer(function(req,res){
// res.writeHead(200,'hi');
// res.end('hello');
// }).listen(port);

// console.log('server is running:4000');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/home', (req, res) => {
    res.send('HOME')
})
app.get('/contact', (req, res) => {
    res.send('Contact Us')
})
app.get('/about', (req, res) => {
    res.send('About')
})
app.listen(port);