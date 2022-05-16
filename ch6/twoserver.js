var fs=require('fs');
var http=require('http');

http.createServer(function(request,response){
    fs.readFile('data/쎌카.jpg',function(error,data){
        response.writeHead(200,{'Content-type':'image/jpeg'});
        response.end(data);
    });
}).listen(9999,function(){
    console.log('Server is Running at localhost:9999');
    console.log("It's serving html");
});


http.createServer(function(request,response){
    fs.readFile('data/BBIBBI.mp3',function(error,data){
        response.writeHead(200,{'Content-Type':'BBIBBI.mp3'});
        response.end(data);
    })
}).listen(9998,function(){
    console.log('Server is Running at localhost:9999');
    console.log("It's serving img and mp3");
})