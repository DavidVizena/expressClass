var http = require("http");

var nice = 7000;
var mean = 7500;


function handleNice(req, res){
    res.end("Brant is ok, sometimes...I guess..")
};

var server =  http.createServer(handleNice);

server.listen(nice, function(){
    console.log("Server listening on: http://localhost:" + nice);
});






function handleMean(req, res){
    res.end("Brant is a smelly pirate hooker for sure 100%!");
};

var otherServer = http.createServer(handleMean);

server.listen(mean, function(){
    res.end("Server listening on: http://localhost:" + mean);
});