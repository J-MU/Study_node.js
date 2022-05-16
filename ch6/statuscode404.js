var http=require('http');

http.createServer(function(request,response){
    response.writeHead(404);
    response.end();
}).listen(9999,function(){
    console.log('Server is Running at localhost');
})