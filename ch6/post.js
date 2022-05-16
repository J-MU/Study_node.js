var fs = require('fs');
var http=require('http');
var url=require('url');


http.createServer(function(request,response){
    if(request.method=='GET'){
        fs.readFile('data/PostHTML.html',function(error,data){
            response.writeHead(200,{'Content-type':'text/html'});
            response.end(data)    
        }); 
    }else if(request.method=='POST'){
        console.log('Post request on');
        request.on('data',function(data){
            response.writeHead(200,{'Content-type':'text/html'});
            response.end('<h1>'+data+'</h1>');
        });
    }
}).listen(9999,function(){
    console.log('Server is Running at local');
})