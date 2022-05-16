var http=require('http');
var fs=require('fs');
var url=require('url');


http.createServer(function(request,response){
    var pathName=url.parse(request.url).pathname;
    console.log(pathName);
    if(pathName=='/data'){
        fs.readFile('data/HTMLpage.html',function(error,data){
            response.writeHead(200,{'Content-type':'text/html'});
            response.end(data);
        })
    }else if(pathName=='/data/OtherPage'){
        fs.readFile('data/OtherPage.html',function(error,data){
            response.writeHead(200,{'Content-type':'text/html'});
            response.end(data);
        });
    }
}).listen(9999,function(){
    console.log('Server is Running at localhost');
})