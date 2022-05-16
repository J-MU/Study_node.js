var fs=require('fs');
var http=require('http');

http.createServer(function(request,response){
    console.log('Request on');
    fs.readFile('data/HTMLpage.html',function(error,data){
        response.writeHead(200,{'content-Type':'text/html'});
        response.end(data);
    })
}).listen(9999,function(){
    console.log('Sever is Running at localhost:9999');
})