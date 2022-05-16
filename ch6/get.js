var http=require('http');
var url=require('url');

http.createServer(function(request,response){
    var query=url.parse(request.url,true).query;

    response.writeHead(200,{'Content-type':'text/html'});
    response.end('<h1>'+JSON.stringify(query)+'</h1>');
}).listen(9999,function(){
    console.log('Server is Running at local');
})